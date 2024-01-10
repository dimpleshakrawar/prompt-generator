import React, { Suspense } from 'react'
import PromptCard from "./PromptCard";
import Loading from "./Loading";

const PromptCardList = ({ prompts, handleTagClick, user }) => {
  return (
    <div className="mt-16 prompt_layout">
      {prompts?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          user={user}
        />
      ))}
    </div>
  );
};

function Feed({ prompt, user }) {

  // const searchApiByTagEvent = async (value) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`/api/prompt/posts/${value}`);
  //     const data = await response.json();
  //     setLoading(false);
  //     setPosts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSearchChange = async (e) => {
  //   if (!e.target.value) fetchPosts();

  //   setSearchText(e.target.value);

  //   searchApiByTagEvent(e.target.value);
  // };

  // const fetchPosts = async () => {
  //   setLoading(true);
  //   const response = await fetch("/api/prompt");
  //   const data = await response.json();
  //   setLoading(false);
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const handleSearchChange = async (e) => {}
  const searchApiByTagEvent = async () => {}
  return (
    <section className="feed">
      <form className="relative w-full flex">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          required
          className="search_input peer"
          // onChange={handleSearchChange}
        />
      </form>
      <Suspense fallback={<Loading />}>
        <PromptCardList prompts={prompt} handleTagClick={searchApiByTagEvent} user={user} />
      </Suspense>
    </section>
  );
}

export default Feed;
