import React, { useRef, useState } from "react";

export default function TestUseRef() {
  const [useText, setUseText] = useState("");
  let text = useRef("a");
  const submitForm = (e) => {
    e.preventDefault();
    console.log(text.current.value);
  };
  return (
    <div className="bg-black overflow-hidden py-4 px-3 rounded col-md-6 offset-3 d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-primary">Test useRef</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter Text to display"
          className="form-control"
          ref={text}
        />

        <button type="submit" className="btn btn-outline-primary mt-3">
          Save
        </button>
        <hr style={{ color: "red" }} />
        <h3 className="text-danger">{useText ? useText : "Test useState"}</h3>
        <hr style={{ color: "red" }} />
        <input
          type="text"
          placeholder="Text will appear as type as"
          className="form-control mt-3"
          onChange={(e) => setUseText(e.target.value)}
        />
      </form>
    </div>
  );
}
