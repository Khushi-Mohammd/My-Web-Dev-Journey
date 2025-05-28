import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a comment</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          id="username"
          name="username"
          onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="remarks">Remarks</label>
        <br />
        <textarea
          placeholder="add few remarks"
          value={formData.remarks}
          id="remarks"
          name="remarks"
          onChange={handleInputChange}
        ></textarea>

        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          id="rating"
          name="rating"
          onChange={handleInputChange}
        />

        <br />
        <br />

        <button>AddComment</button>
      </form>
    </div>
  );
}
