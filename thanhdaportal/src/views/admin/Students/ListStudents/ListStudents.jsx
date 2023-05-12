import React, { useState, useEffect } from "react";
import "./ListStudents.scss";
import TableStudents from "./TableStudents";

const ListStudents = () => {

  return (
    <div className="table-responsive-lg">
      <TableStudents/>
    </div>
  );
};

export default ListStudents;
