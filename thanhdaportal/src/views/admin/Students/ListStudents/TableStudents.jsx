/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosEye } from "react-icons/io";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';
import "./TableStudents.css";
import moment from "moment";

const TableStudents = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [student, setStudents] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setisLoading(true);
    getStudents();
  }, []);

  //GET method
  const getStudents = async () => {
    await axios
      .get("https://6520be0e906e276284c4a193.mockapi.io/thanhdaportal/students")
      .then((res) => {
        setStudents(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const sortStudents = [...student].sort((a, b) => a - b);
  // console.log(sortStudents);

  //DELETE method
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/ms-user/delete/?id=${id}`)
      .then(function (res) {
        setStudents(res.data.users);
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // if (!student) {
  //   return "No data found. Please click on button Add New";
  // } else if (isLoading) {
  //   return (
  //     <div
  //       className="spinner-loading"
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Spinner animation="border" />
  //     </div>
  //   );
  // }

  return (
    <div className="table-responsive">
      <table className="table p-5 table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="text-primar text-center" scope="col"></th>
            <th className="text-primar" scope="col">
              Tên Thánh
            </th>
            <th className="text-primar" scope="col">
              Họ Tên
            </th>
            <th className="text-primar" scope="col">
              Ngày Sinh
            </th>
            <th className="text-primar" scope="col">
              Ngày RT
            </th>
            <th className="text-primar" scope="col">
              Nơi RT
            </th>
            <th className="text-primar" scope="col">
              Địa Chỉ
            </th>
            <th className="text-primar" scope="col">
              Lớp Cũ
            </th>
            <th className="text-primar" scope="col">
              Lớp Mới
            </th>
            <th className="text-primar" scope="col"></th>
            <th className="text-primar" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0 ? student.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : student &&
            student).map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    {/* <td>
                    <IoSquareOutline />
                  </td> */}
                    <td>
                      <Link
                        to={`/studentdetail/${item.id}`}
                        className="button-icon"
                      >
                        <IoIosEye className="icon" />
                      </Link>
                    </td>
                    <td className="text-primar">{item.holyName}</td>
                    <td className="text-primar">
                      {item.lastName +
                        " " +
                        item.middleName +
                        " " +
                        item.firstName}
                    </td>
                    <td className="text-primar">
                      {moment(item.birthday).format("DD-MM-YYYY")}
                    </td>
                    <td className="text-primar">
                      {moment(item.baptismDay).format("DD-MM-YYYY")}
                    </td>
                    <td className="text-primar">{item.baptismPlace}</td>
                    <td className="text-primar">{item.address}</td>
                    <td className="text-primar">{item.oldClass}</td>
                    <td className="text-primar">{item.newClass}</td>
                    <td>
                      <Link
                        to={`/editstudent/${item.id}`}
                        className="button-icon"
                      >
                        <FiEdit className="icon" />
                      </Link>
                    </td>
                    <td>
                      <Link
                        onClick={() => handleDelete(item.id)}
                        className="button-icon"
                      >
                        <FiTrash2 />
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableStudents;
