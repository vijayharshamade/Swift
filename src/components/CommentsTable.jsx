function CommentsTable({ currentData, toggleSort }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-500 ">
        <thead className="">
          <tr className="bg-gray-300 text-left">
            <th
              className="p-4 cursor-pointer"
              onClick={() => toggleSort("postId")}
            >
              Post&nbsp;ID
            </th>
            <th
              className="p-4 cursor-pointer"
              onClick={() => toggleSort("name")}
            >
              Name
            </th>
            <th
              className="p-4 cursor-pointer"
              onClick={() => toggleSort("email")}
            >
              Email
            </th>
            <th className="p-4">Comment</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-500">
          {currentData.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="p-2">{c.postId}</td>
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommentsTable;
