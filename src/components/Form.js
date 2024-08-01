import { useState } from "react";
import React from "react";
function Myform() {
  const [name, setName] = useState(0);
  function onSubmit(e) {
    let data = e.target.value;
    console.log(data);
  }
  return (
    <>
      <div>Full Named Display</div>
      <form>
        <label>FirstName :</label>
        <input type="text"></input>
        <label>LastName</label>
        <input type="text"></input>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
        <div>FullName:{setName}</div>
      </form>
    </>
  );
}

export default Myform;
