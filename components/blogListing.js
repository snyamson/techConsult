import Pagination from "../components/common/pagination";
import BlogItem from "./blogItem";

const posts = ["1", "2", "3", "4"];

const BlogListing = () => {
  return (
    <div className="col-lg-8">
      <div className="row g-5">
        {posts.map((post) => (
          <BlogItem key={post} />
        ))}
        <Pagination />
      </div>
    </div>
  );
};

export default BlogListing;
