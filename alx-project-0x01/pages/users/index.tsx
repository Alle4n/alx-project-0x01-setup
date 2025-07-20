import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users Page</h1>
          <button className="bg-green-600 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user: UserProps, index: number) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

// ✅ Static Generation
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UsersPage;
