import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        placeholder="enter fullname"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />

      <br />
      <br />

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="enter username"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        placeholder="enter password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />

      <br />
      <br />

      <button>Submit</button>
    </form>
  );
}
