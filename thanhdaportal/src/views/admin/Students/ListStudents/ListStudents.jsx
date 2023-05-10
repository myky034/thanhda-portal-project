import React, { useState, useEffect } from "react";
import "./ListStudents.scss";
import TableStudents from "./TableStudents";

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = students.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-responsive-lg">
      <TableStudents/>
    </div>
  );
};

export default ListStudents;
