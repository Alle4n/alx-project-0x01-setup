import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const id = users.length + 1;
    setUsers(prev => [{ ...newUser, id }, ...prev]);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users Page</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user, key) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
