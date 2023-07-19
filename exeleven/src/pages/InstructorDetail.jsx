import React from "react";
import { useLocation, useParams } from "react-router-dom";

const InstructorDetail = () => {
  let { id } = useParams();
  let { state, pathname } = useLocation();
  return (
    <div className="p-3">
      <p>
        from useParam: I'm instructor{" "}
        <span className="text-danger fw-bolder">{id}</span>
      </p>
      <p>
        from useLocation: I'm instructor{" "}
        <span className="text-danger fw-bolder">{state?.name}</span>
      </p>
      <p>our pat is:{pathname}</p>
    </div>
  );
};

export default InstructorDetail;
