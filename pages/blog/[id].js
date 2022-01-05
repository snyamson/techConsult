import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const { id: blogId } = router.query;

  return <div>This page contains the blog details {blogId} </div>;
};

export default BlogDetail;
