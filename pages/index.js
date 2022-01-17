import Blog from "/components/blog";
import NavBar from "/components/common/navBar";
import Modal from "/components/common/modal";
import Features from "/components/features";
import Services from "/components/services";
import Brand from "/components/brand";
import Spinner from "/components/common/spinner";
import Quote from "/components/quote";
import { getPosts } from "../lib/posts";

const Home = ({ posts = [] }) => {
  return (
    <div>
      {/* <Spinner /> */}
      <NavBar />
      <Modal />
      <Brand />
      <Features />
      <Services />
      <Quote />
      {posts.length && <Blog posts={posts} />}
    </div>
  );
};

export default Home;

// export async function getStaticProps() {

//   const posts = await getPosts(3);

//   // if (!posts) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   return {
//     props: { posts },
//   };
// }
