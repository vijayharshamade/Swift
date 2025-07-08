import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CommentsTable from "./CommentsTable";
import Pagination from "./Pagination";
import { saveState, loadState } from "../utils/LocalStorage";
import SortButton from "./SortButton";

function CommentsDashboard() {
  const [allComments, setAllComments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setSearchText(saved.searchText || "");
      setSortConfig(saved.sortConfig || null);
      setPageSize(saved.pageSize || 10);
      setCurrentPage(saved.currentPage || 1);
    }

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setAllComments);
  }, []);

  useEffect(() => {
    let data = [...allComments];

    if (searchText) {
      const term = searchText.toLowerCase();
      data = data.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.email.toLowerCase().includes(term) ||
          c.body.toLowerCase().includes(term)
      );
    }

    if (sortConfig?.key) {
      data.sort((a, b) => {
        const { key, direction } = sortConfig;
        if (direction === "asc") return a[key] > b[key] ? 1 : -1;
        if (direction === "desc") return a[key] < b[key] ? 1 : -1;
        return 0;
      });
    }

    const uniqueByPost = [...new Map(data.map((c) => [c.postId, c])).values()];
    setFiltered(uniqueByPost);

    saveState({ searchText, sortConfig, pageSize, currentPage });
  }, [searchText, sortConfig, pageSize, currentPage, allComments]);

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentData = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const toggleSort = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      setSortConfig({ key, direction: "asc" });
    } else if (sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" });
    } else {
      setSortConfig(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* <h2 className="text-xl font-bold text-gray-800 mb-4">
        Comments Dashboard
      </h2> */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
        <div className="flex flex-nowrap items-center gap-3 overflow-x-auto">
          <SortButton
            label="Sort Post ID"
            sortKey="postId"
            sortConfig={sortConfig}
            onSort={toggleSort}
          />
          <SortButton
            label="Sort Name"
            sortKey="name"
            sortConfig={sortConfig}
            onSort={toggleSort}
          />
          <SortButton
            label="Sort Email"
            sortKey="email"
            sortConfig={sortConfig}
            onSort={toggleSort}
          />
        </div>

        <div className="flex-1 w-full sm:flex-none sm:w-60 md:w-80 lg:w-80 sm:ml-auto">
          <SearchBar value={searchText} onChange={setSearchText} />
        </div>
      </div>

      {/* table */}
      <CommentsTable currentData={currentData} toggleSort={toggleSort} />

      {/* pagination */}
      <Pagination
        totalItems={totalItems}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[10, 50, 100]}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={(n) => {
          setPageSize(n);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}

export default CommentsDashboard;
