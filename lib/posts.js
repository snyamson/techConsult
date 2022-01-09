import GhostContentApi from "@tryghost/content-api";

// Create API instance with site credentials

const api = new GhostContentApi({
  url: "https://techConsult.ghost.io",
  key: "8c7c6c81006b0e19bce4879f74",
  version: "v3",
});

// Get All Posts {posts.browse()}

export async function getPosts(limit) {
  return await api.posts
    .browse({
      limit: `${limit}`,
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get Single Post Item

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.log(err);
    });
}
