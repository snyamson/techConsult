import { useSWR } from "swr";
import Blog from "/components/blog";
import NavBar from "/components/common/navBar";
import Modal from "/components/common/modal";
import Features from "/components/features";
import Services from "/components/services";
import Brand from "/components/brand";
import Spinner from "/components/common/spinner";
import Quote from "/components/quote";
import { getPosts } from "../lib/posts";

const Home = ({ posts }) => {
  // const initialData = posts;

  // const { data } = useSWR("/api/getPosts", getPosts, { initialData });

  return (
    <div>
      <Spinner />

      <NavBar />
      <Modal />
      <Brand />
      <Features />
      <Services />
      <Quote />
      <Blog posts={posts} />
    </div>
  );
};

export default Home;

export async function getStaticProps({ res }) {
  // if (res) {
  //   const cacheAge = 60 * 60 * 12;
  //   res.setHeader("Cache-Control", `public,s-maxage=${cacheAge}`);
  // }
  const posts = await getPosts(3);

  // if (!posts) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { posts },
  };
}
