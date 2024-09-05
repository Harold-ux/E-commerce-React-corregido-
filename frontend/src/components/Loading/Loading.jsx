import React from "react";
import { BarLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="loading">
      <BarLoader color="#ffc700" width={250} />{" "}
    </div>
  );
};
