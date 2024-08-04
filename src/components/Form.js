import React, { useState } from "react";
import styles from "./Form.module.css";

function Myform() {
  const [data, setData] = useState({ firstname: "", lastname: "" });
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
      <div className={styles.display}>Full Name Display</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </>
  );
}

export default Myform;
