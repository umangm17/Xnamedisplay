import { useState } from "react";
import React from "react";
import styles from "./Form.module.css";
function Myform() {
  const [data, setData] = useState({ firstname: " ", lastname: " " });
  const [fullName, setFullName] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    setFullName(`${data.firstname} ${data.lastname}`);
  }
  return (
    <>
      <div className={styles.display}>Full Named Display</div>
      <form onSubmit={handleSubmit}>
        <label>FirstName :</label>
        <input
          type="text"
          id="name"
          name="firstname"
          value={data.name}
          onChange={handleChange}
          required
        ></input>
        <div>
          <label>LastName :</label>
          <input
            type="text"
            name="lastname"
            value={data.name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
        <div>Full Name: {fullName}</div>
      </form>
    </>
  );
}

export default Myform;
