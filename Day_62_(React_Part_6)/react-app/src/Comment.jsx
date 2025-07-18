import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [commments, setComments] = useState([]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <div>
      <div>
        <h3>All Comments</h3>
        {commments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp; &nbsp;
            <span>(Rating = {comment.rating})</span>
            <div style={{ textAlign: "end" }}>-{comment.username}</div>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <CommentsForm addNewComment={addNewComment} />
      </div>
    </div>
  );
}
