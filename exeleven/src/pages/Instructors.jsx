import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        <Link to="1" state={{ name: "erhan" }}>
          Instructor-1
        </Link>
        <Link to="2" state={{ name: "meral" }}>
          Instructor-2
        </Link>
        <Link to={"3"} state={{ name: "Ayse" }}>
          Instructor-3
        </Link>
      </div>
    </div>
  );
};

export default Instructors;
