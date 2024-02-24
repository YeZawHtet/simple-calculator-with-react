import React, { useCallback, useState } from "react";

export default function TestUseCallback() {
  let [numberOne, setNumberOne] = useState(0);
  let [numberTwo, setNumberTwo] = useState(0);
  let changeNumber1 = () => {
    setNumberOne((prevNum) => prevNum + 1);
  };
  let changeNumber2 = () => {
    setNumberTwo((prevNum) => prevNum + 1);
  };

  let isEven = useCallback(() => {
    let i = 0;
    while (i < 500000000) i++;
    return numberOne % 2 === 0;
  }, [numberOne]);
  return (
    <div className="col-md-6 offset-3 p-5 bg-black rounded shadow d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-primary mb-3">Test useCallback</h1>
      <div className="bg-dark p-3 rounded mb-3">
        <p className="text-primary fw-bolder">
          useCallback returns a memoized callback function.
        </p>
        <p className="text-primary fw-bolder">
          useCallback for memoizing callback functions.
        </p>
        <p className="text-primary fw-bolder">
          In useCallback, dependencies are used to determine when to recreate
          the memoized callback function.
        </p>
      </div>

      <h3 className="text-warning mb-3">
        Number One is : {numberOne} {isEven() ? "is Even" : "is Odd"}
      </h3>
      <button className="btn btn-outline-primary mb-3" onClick={changeNumber1}>
        Change NumberOne
      </button>
      <h3 className="text-warning mb-3">Number Two is : {numberTwo}</h3>
      <button className="btn btn-outline-primary" onClick={changeNumber2}>
        Change NumberTwo
      </button>
    </div>
  );
}
