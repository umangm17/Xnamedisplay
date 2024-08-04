// import { useState } from "react";
// import React from "react";
// import styles from "./Form.module.css";
// function Myform() {
//   const [data, setData] = useState({ firstname: "", lastname: "" });
//   const [fullName, setFullName] = useState("");
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   }
//   function handleSubmit(e) {
//     e.preventDefault();

//     setFullName(`${data.firstname} ${data.lastname}`);
//   }

//   return (
//     <>
//       <div className={styles.display}>Full Named Display</div>
//       <form onSubmit={handleSubmit}>
//         <label>FirstName :</label>
//         <input
//           type="text"
//           id="name"
//           name="firstname"
//           value={data.name}
//           onChange={handleChange}
//           required
//         ></input>
//         <div>
//           <label>LastName :</label>
//           <input
//             type="text"
//             name="lastname"
//             value={data.name}
//             onChange={handleChange}
//             required
//           ></input>
//         </div>
//         <button type="submit">Submit</button>
//         <div>{fullName && <div>Full Name: {fullName}</div>}</div>
//       </form>
//     </>
//   );
// }

// export default Myform;
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

  const isFormValid =
    data.firstname.trim() !== "" && data.lastname.trim() !== "";

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
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </>
  );
}

export default Myform;
