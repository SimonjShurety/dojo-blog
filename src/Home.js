import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  const x = useFetch("http://localhost:8000/blogs");
  console.log("error =", error);
  console.log("x variable =", x);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
