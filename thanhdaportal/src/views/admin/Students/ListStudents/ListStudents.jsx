import React, { useState, useEffect } from "react";
import "./ListStudents.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { IoSquareOutline } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListStudents = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isLoading, setisLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [students, setStudents] = useState([]);

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      timeout: 3000
    });
  };

  useEffect(() => {
    setisLoading(true);

    //GET method
    axios
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
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/ms-user/delete/?id=${id}`)
      .then(function (res) {
        setStudents(res.data.users);
        console.log(res.data);
        // setShow(false);
        showToastMessage();
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        // setShow(false);
      });
  };

  return (
    <div className="table-responsive-lg">
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
          {students &&
            students.map((item, index) => {
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
                        onClick={handleShow}
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
                        onClick={handleShow}
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
          {show && <ConfirmDelete closeModal={setShow}/>}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudents;
