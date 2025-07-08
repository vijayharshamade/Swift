import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, []);

  if (!user) {
    return <div className="text-center p-6">Loading…</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mt-6 mb-4 flex items-center gap-2">
        <Link to="/" className="text-2xl leading-none">
          &larr;
        </Link>
        <h1 className="text-lg font-semibold">
          Welcome,&nbsp;{user.name.split(" ")[0]}
        </h1>
      </div>

      <div className="bg-white border rounded-lg shadow-sm p-8">
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-600">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                User&nbsp;ID
              </label>
              <div className="bg-gray-100 rounded-lg px-4 py-2">{user.id}</div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Email&nbsp;ID
              </label>
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                {user.email}
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Phone</label>
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                {user.phone}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name</label>
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                {user.name}
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Address
              </label>
              <div className="bg-gray-100 rounded-lg px-4 py-2 truncate">
                {user.address.street}, {user.address.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
