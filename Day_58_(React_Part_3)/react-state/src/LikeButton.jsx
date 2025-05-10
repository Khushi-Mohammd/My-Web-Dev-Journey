import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p>
        {isLiked ? (
          <i
            onClick={toggleLike}
            className="fa-solid fa-heart"
            style={{ color: "red" }}
          ></i>
        ) : (
          <i onClick={toggleLike} className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
