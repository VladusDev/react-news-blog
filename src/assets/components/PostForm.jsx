import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder="Заголовок поста"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
    </div>
  );
};

export default PostForm;
