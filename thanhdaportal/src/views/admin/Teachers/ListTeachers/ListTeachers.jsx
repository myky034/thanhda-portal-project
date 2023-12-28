/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosEye } from "react-icons/io";
import { IoSquareOutline } from "react-icons/io5";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import moment from "moment";

const ListTeachers = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [teacher, setTeachers] = useState([]);

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
    getTeachers();
  }, []);

  //GET method
  const getTeachers = async () => {
    await axios
      .get("https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers")
      .then((res) => {
        setTeachers(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //DELETE method
  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers/delete/?id=${id}`
      )
      .then(function (res) {
        setTeachers(res.data.users);
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="table-responsive">
      <table className="table p-5 table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="text-primar" scope="col"></th>
            <th className="text-primar text-center" scope="col"></th>
            <th className="text-primar" scope="col">
              Tên Thánh
            </th>
            <th className="text-primar" scope="col">
              Họ Tên
            </th>
            <th className="text-primar" scope="col">
              Số Điện Thoại
            </th>
            <th className="text-primar" scope="col">
              Ngày Bổn Mạng
            </th>
            <th className="text-primar" scope="col">
              GLV Lớp
            </th>
            <th className="text-primar" scope="col">
              Khối
            </th>
            <th className="text-primar" scope="col"></th>
            <th className="text-primar" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? teacher.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : teacher && teacher
          ).map((item) => {
            return (
              <>
                <tr className="align-middle">
                  <td>
                    <IoSquareOutline />
                  </td>
                  <td>
                    <Link
                      to={`/teacherdetail/${item.id}`}
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
                  <td className="text-primar">{item.phone}</td>
                  <td className="text-primar">
                    {moment(item.baptismDay).format("DD-MM-YYYY")}
                  </td>
                  <td className="text-primar">{item.class}</td>
                  <td className="text-primar">{item.deparment}</td>
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

export default ListTeachers;
