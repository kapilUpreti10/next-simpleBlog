// hardcoded data

const users = [
  {
    userId: 1,
    id: 1,
    username: "Kapil Upreti",
  },
  {
    userId: 2,
    id: 2,
    username: "John Doe",
  },
  {
    userId: 3,
    id: 3,
    username: "hello world",
  },
];

const posts = [
  {
    userId: 1,
    title: "Ai is dangerous",
    body: "Artificial intelligence is dangerous and this is the fact and the reality",
  },
  {
    userId: 2,
    title: "Crypto is boom market",
    body: "Crypto is booming and this is the right time to invest in crypto",
  },
  {
    userId: 3,
    title: "Web3 is the future",
    body: "Web3 is the future and this is the right time to learn web3 and blockchain technology and this is the right time to invest in web3 and blockchain technology",
  },
];

export const getUser = async (id) => {
  const user = users.find((user) => user.id == id);
  console.log(user);
};

export const getPosts = async () => {
  return posts;
};
export const getPost = async (id) => {
  return posts.find((post) => post.id == id);
};
