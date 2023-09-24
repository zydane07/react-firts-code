import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      title: "First Post zydane",
      body: "lorem ipsum",
      author: "zydane",
      id: 1,
    },
    {
      title: "First Post farhan",
      body: "lorem ipsum",
      author: "Farhan",
      id: 2,
    },
    { title: "First Post rina", body: "lorem ipsum", author: "Rina", id: 3 },
  ]);

  return (
    <div
      className="home mx-auto max-w-xl"
      style={{
        height: "80vh",
      }}
    >
      <h1 className="my-6 text-center text-4xl font-bold text-blue-900">
        Homepage
      </h1>
      {posts.map((post) => (
        <div
          className="hover:boxs my-5 border-b px-4 py-3 hover:rounded-sm hover:shadow"
          key={post.id}
        >
          <h2 className="text-xl font-bold text-blue-800">{post.title}</h2>
          <h2 className="text-gray-400">
            Written by: <span className="font-bold ">{post.author}</span>{" "}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
