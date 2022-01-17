/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import NavBar from "/components/common/navBar";
import { getPosts, getSinglePost } from "../../lib/posts";
import RecentPost from "/components/recentPost";

const BlogDetail = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <NavBar header />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-5">
                <div className="mb-5">
                  <img
                    className="img-fluid w-100 rounded mb-5"
                    src="../assets/img/blog-1.jpg"
                    alt="service"
                  />
                  <h1 className="mb-4">{post.title}</h1>
                  <div
                    style={{
                      width: "100%",
                      overflow: "hidden",
                    }}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <RecentPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const posts = await getPosts("all");

  // Get all Paths we want to create based on the number of posts

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // {fallback: false} means posts not found  should be 404
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  // if (!post) {
  //   return {
  //     notFound: true
  //   }
  // }

  return {
    props: { post },
  };
}
