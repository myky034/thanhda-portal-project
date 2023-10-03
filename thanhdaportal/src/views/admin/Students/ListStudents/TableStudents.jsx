import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { IoIosEye } from "react-icons/io";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "./../../../../components/Pagination/Pagination";
import "./TableStudents.css";
import moment from "moment";

let PageSize = 7;

const TableStudents = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [students, setStudents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableStudents = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return students.slice(firstPageIndex, lastPageIndex);
  });

  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  useEffect(() => {
    setisLoading(true);
    getStudents();
  }, []);

  //GET method
  const getStudents = async () => {
    await axios
      .get("http://localhost:8080/api/ms-user/all-users?id=ALL")
      .then((res) => {
        setStudents(res.data.users);
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

  if (!students) {
    return "No data found. Please click on button Add New";
  } else if (isLoading) {
    return (
      <div
        className="spinner-loading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
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
          {currentTableStudents &&
            currentTableStudents.map((item, index) => {
              return (
                <>
                  <tr key={index} className="align-middle">
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={students.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TableStudents;
