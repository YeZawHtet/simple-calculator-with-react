import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function () {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  //! Testing useEffect
  const [effect, setEffect] = useState([]);
  //!Result for add, subtract, multiply, divide
  const [result, setResult] = useState("");
  //!catching which operation is made now
  const [operation, setOperation] = useState("");

  //testing useEffect
  useEffect(() => {
    setEffect([{ numberOne }, { numberTwo }]);
    setResult("waiting for operation!");
  }, [numberOne, numberTwo]);

  const calculate = (operation) => {
    if (numberOne === "" || numberTwo === "") {
      toast.error("Please enter numbers to calculate!");
      return;
    }
    const num1 = parseInt(numberOne);
    const num2 = parseInt(numberTwo);

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        setOperation("adding");
        break;
      case "subtract":
        if (num1 < num2) {
          toast.warning("Number 1 must be larger than Number 2");
          setOperation("");
          setResult("");
        } else {
          setResult(num1 - num2);
          setOperation("subtracting");
        }
        break;
      case "multiply":
        setResult(num1 * num2);
        setOperation("multiplying");
        break;
      case "division":
        if (num1 < num2) {
          toast.warning("Number 1 must be larger than Number 2");
          setOperation("");
          setResult("");
        } else {
          setResult(num1 / num2);
          setOperation("dividing");
        }
        break;
      default:
        break;
    }
  };

  const handleNumberChange = (setValue, value) => {
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setValue(value);
    }
  };

  return (
    <div>
      <div
        className="bg-dark col-md-6 offset-3 rounded shadow"
        style={{ border: "1px solid rgb(77, 77, 0)" }}
      >
        <h3 className="text-center text-warning py-3">Calculator</h3>
        <div className="col-md-7 offset-2 bg-dark rounded">
          <label htmlFor="NumberOne" className="text-warning form-label">
            Number One :
          </label>
          <input
            type="text"
            value={numberOne}
            onChange={(e) => handleNumberChange(setNumberOne, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 1"
          />
          <label htmlFor="NumberTwo" className="text-warning form-label">
            Number Two :
          </label>
          <input
            type="text"
            value={numberTwo}
            onChange={(e) => handleNumberChange(setNumberTwo, e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Number 2"
          />
          <button
            type="submit"
            onClick={() => calculate("add")}
            className="btn btn-outline-primary px-3 me-2 mb-2 "
          >
            Sum
          </button>
          <button
            type="submit"
            onClick={() => calculate("subtract")}
            className="btn btn-outline-primary px-3 me-2 mb-2 "
          >
            Subtract
          </button>
          <button
            type="submit"
            onClick={() => calculate("multiply")}
            className="btn btn-outline-primary px-3 me-2 mb-2"
          >
            Multiply
          </button>
          <button
            type="submit"
            onClick={() => calculate("division")}
            className="btn btn-outline-primary px-3 mb-2"
          >
            Division
          </button>
        </div>
        //!Result Container
        <div className="text-warning col-md-6 offset-3 py-3">
          {result !== "" && (
            <p className="fw-bolder fs-5">
              {operation === "adding" &&
                `${effect[0]?.numberOne} + ${effect[1]?.numberTwo} = ${result}`}
              {operation === "subtracting" &&
                `${effect[0]?.numberOne} - ${effect[1]?.numberTwo} = ${result}`}
              {operation === "multiplying" &&
                `${effect[0]?.numberOne} * ${effect[1]?.numberTwo} = ${result}`}
              {operation === "dividing" &&
                `${effect[0]?.numberOne} / ${effect[1]?.numberTwo} = ${
                  result == "waiting for operation!"
                    ? result
                    : Number.isInteger(result)
                    ? result
                    : result.toFixed(2)
                }`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
