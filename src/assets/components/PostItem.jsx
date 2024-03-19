import React from "react";
import styles from "./PostItem.module.scss";
import Button from "./UI/Button";

const PostItem = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={styles.post__btns}>
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
