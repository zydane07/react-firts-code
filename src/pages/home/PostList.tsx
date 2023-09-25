const PostList = ({ posts, title }: any) => {
  //   const posts = props.posts;
  //   const title = props.title;

  return (
    <>
      <h2 className="px-4 text-2xl font-bold text-black">{title}</h2>
      {posts.map((post: any) => (
        <div
          className="hover:boxs my-5 flex cursor-pointer items-center justify-between border-b px-4 py-3 hover:rounded-sm hover:shadow"
          key={post.id}
        >
          <div>
            <h2 className="text-xl font-bold text-blue-800">{post.title}</h2>
            <h2 className="text-gray-400">
              Written by: <span className="font-bold ">{post.author}</span>{" "}
            </h2>
          </div>

          {/* <button
            className="button-delete"
            onClick={() => handleDelete(post.id)}
          >
            <i className="fa-solid fa-trash me-1"></i>
            Delete
          </button> */}
        </div>
      ))}
    </>
  );
};

export default PostList;
