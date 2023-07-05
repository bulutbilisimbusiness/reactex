import React from "react";
import { useState } from "react";
import UseStateCounter from "./useStateCounter";

const Spread = () => {
  /* const [name, setName] = useState("Ahmet Can");
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000); */
  const [kisi, setKisi] = useState({
    name: "Ahmet Can",
    age: 30,
    salary: 50000,
  });
  const [toggle, setToggle] = useState(true);
  //let toggle = false;
  const handleToggle = () => {
    //toggle = !toggle;
    setToggle(!toggle);
    if (toggle) {
      setKisi({
        name: "Aliye Cankaya ",
        age: 48,
        salary: 67900,
      });
    } else {
      setKisi({
        name: "Ahmet Can",
        age: 30,
        salary: 50000,
      });
    }
  };
  return (
    <div>
      <h1>USE STATE OBJECT</h1>

      {/* <h2>NAME:{name}</h2>

      <h2>AGE:{age}</h2>
      <h2>SALARY:{salary}</h2>
      <button onClick={() => setName("Erhan Bulut")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>inc age</button>
      <button onClick={() => setSalary(salary + 10000)}>inc salary</button> */}
      <h2>NAME:{kisi.name}</h2>

      <h2>AGE:{kisi.age}</h2>
      <h2>SALARY:{kisi.salary}</h2>
      <button onClick={() => setKisi({ ...kisi, name: "Erhan Bulut" })}>
        Change Name
      </button>
      <button onClick={() => setKisi({ ...kisi, age: kisi.age + 1 })}>
        inc age
      </button>

      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 1000 })}>
        inc age
      </button>
      <button
        onClick={() =>
          setKisi({
            name: prompt("Enter new name"),
            age: parseInt(prompt("Enter new Age")),
            salary: parseFloat(prompt("Enter New Salary")),
          })
        }
      >
        Full Change
      </button>
      <button onClick={handleToggle}>Toggle</button>
      {toggle && <UseStateCounter />}
    </div>
  );
};
export default Spread;
