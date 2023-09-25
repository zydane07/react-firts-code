import { useParams } from "react-router-dom";
import useFecth from "../useFecth";
import Loading from "../../components/Loading";

const PostDetail = () => {
  const { id }: any = useParams();
  const url = "http://localhost:8000";
  const { data: post, error, isPending } = useFecth(`${url}/posts/` + id);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {post && (
        <>
          <h1 className="text-header">Post Detail - {id}</h1>
          <article className="container-content text-justify">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <h4 className="text-gray-400">
              Written by: <span className="font-bold"> {post.author}</span>
            </h4>
            <p className="mt-2">{post.body}</p>
          </article>
        </>
      )}
    </>
  );
};

export default PostDetail;
