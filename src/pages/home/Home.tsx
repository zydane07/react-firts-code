import PostList from "./PostList";
import Loading from "./Loading";
import useFecth from "../useFecth";

const Home = () => {
  const title = "Homepage";
  const url = "http://localhost:8000";
  const { data: posts, isPending, error }: any = useFecth(`${url}/posts`);

  //   function handle delete
  //   const handleDelete = (id: number) => {
  //     const newPost = posts.filter((post: any) => post.id !== id);
  //     setPosts(newPost);
  //   };

  return (
    <div
      className="home mx-auto max-w-xl"
      style={{
        height: "80vh",
      }}
    >
      <h1 className="my-6 text-center text-4xl font-bold text-blue-900">
        {title}
      </h1>
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {posts && <PostList posts={posts} title="All Posts" />}

      {/* filter exampe */}
      {/* <PostList
        posts={posts.filter((blog) => blog.author === "Zydane")}
        title="Zydane Posts"
      /> */}
    </div>
  );
};

export default Home;
