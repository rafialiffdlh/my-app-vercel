"use client";

import { FC, useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
  phone: string;
}

const Teams: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h2 className="mt-4 text-center text-xl font-semibold">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-center text-gray-500">
              {user.location.city}, {user.location.country}
            </p>
            <p className="mt-2 text-center text-gray-600">
              Email: {user.email}
            </p>
            <p className="text-center text-gray-600">Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
