import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { IoSquareOutline } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pagination from './../../../../components/Pagination/Pagination';

let PageSize = 10;

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
        setisLoading(true);
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

  return (
    <div>
      <table className="table p-5 table-hover">
        <thead className="thead-dark">
          <tr>
            {/* <th className="text-primar text-center" scope="col"></th> */}
            <th className="text-primar text-center" scope="col"></th>
            <th className="text-primar" scope="col">
              Tên Thánh
            </th>
            <th className="text-primar" scope="col">
              Họ Tên
            </th>
            <th className="text-primar" scope="col">
              Giới Tính
            </th>
            <th className="text-primar" scope="col">
              Ngày Sinh
            </th>
            <th className="text-primar" scope="col">
              Ngày Rửa Tội
            </th>
            <th className="text-primar" scope="col">
              Nơi Rửa Tội
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
                    <td>{item.holyName}</td>
                    <td>
                      {item.firstName +
                        " " +
                        item.middleName +
                        " " +
                        item.lastName}
                    </td>
                    <td>{item.gender}</td>
                    <td>{item.birthday}</td>
                    <td>{item.baptismDay}</td>
                    <td>{item.baptismPlace}</td>
                    <td>{item.address}</td>
                    <td>{item.oldClass}</td>
                    <td>{item.newClass}</td>
                    <td>
                      <Link
                        to={`/studentdetail/${item.id}`}
                        className="button-icon"
                      >
                        <FiEdit className="icon" />
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        // onClick={() => setShow(true)}
                        onClick={() => handleDelete(item.id)}
                      >
                        <FiTrash2 />
                      </Button>
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
}

export default TableStudents
