import React from "react";

function Pagination({
  totalItems,
  rowsPerPage,
  rowsPerPageOptions = [10, 25, 50, 100],
  currentPage,
  onPageChange,
  onRowsPerPageChange,
}) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  if (totalPages <= 1) return null;

  const from = (currentPage - 1) * rowsPerPage + 1;
  const to = Math.min(from + rowsPerPage - 1, totalItems);

  const btn =
    "w-8 h-8 flex items-center justify-center border rounded transition disabled:opacity-40 disabled:cursor-not-allowed";
  const txtBtn = "hover:bg-gray-100";
  const arrowBtn = "hover:bg-gray-100";
  const currentStyle = "border-gray-900 font-semibold";

  return (
    <div className="w-full flex flex-row sm:flex-row items-start sm:items-center justify-end gap-3 mt-6 text-sm select-none overflow-x-auto">
      <span className="text-gray-700 whitespace-nowrap">
        {from}-{to} of {totalItems} items
      </span>

      <button
        className={`${btn} ${arrowBtn}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <div className={`${btn} ${currentStyle}`}>{currentPage}</div>

      {currentPage + 1 <= totalPages && (
        <button
          className={`${btn} ${txtBtn}`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}

      <button
        className={`${btn} ${arrowBtn}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>

      <select
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        className="border rounded px-2 py-1 text-sm"
      >
        {rowsPerPageOptions.map((n) => (
          <option key={n} value={n}>
            {n} / Page
          </option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
