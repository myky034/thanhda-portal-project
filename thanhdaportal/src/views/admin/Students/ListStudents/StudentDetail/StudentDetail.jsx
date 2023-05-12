import React, { useState, useEffect } from "react";
import './StudentDetail.scss';
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sidebar from "../../../../../components/SideBar/Sidebar";

const StudentDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    gender: "",
    address: "",
    city: "",
    baptismDay: "",
    baptismPlace: "",
    role: "",
    holyName: "",
    oldClass: "",
    newClass: "",
    holyNameFather: "",
    fatherName: "",
    holyNameMother: "",
    motherName: "",
  };

  const [students, setStudents] = useState(initialValues);

  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    gender: "",
    address: "",
    city: "",
    baptismDay: "",
    baptismPlace: "",
    role: "",
    holyName: "",
    oldClass: "",
    newClass: "",
    holyNameFather: "",
    fatherName: "",
    holyNameMother: "",
    motherName: "",
  };

  const [students, setStudents] = useState(initialValues);
  const [isLoading, setisLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setisLoading(true);

    //GET method
    axios
      .get("http://localhost:8080/api/ms-user/all-users/?id=" + id)
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudents({ ...students, [name]: value });
  };

  const handleClose = () => {
    setStudents(initialValues);
    setSubmitted(false);
    navigate("/student");
  }

  const updateStudents = () => {
    let data = {
      id: students.id,
      firstName: students.firstName,
      middleName: students.middleName,
      lastName: students.lastName,
      username: students.username,
      password: students.password,
      email: students.email,
      birthday: students.birthday,
      phoneNumber: students.phoneNumber,
      gender: students.gender,
      address: students.address,
      city: students.city,
      baptismDay: students.baptismDay,
      baptismPlace: students.baptismPlace,
      role: students.role,
      holyName: students.holyName,
      oldClass: students.oldClass,
      newClass: students.newClass,
      holyNameFather: students.holyNameFather,
      fatherName: students.fatherName,
      holyNameMother: students.holyNameMother,
      motherName: students.motherName,
    };

    //PUT method
    axios
      .put(`http://localhost:8080/api/ms-user/edit`, data)
      .then(function (res) {
        setStudents(res.data.users);
        setSubmitted(true);
        console.log(res.data);
        navigate("/student");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="student-detail-page">
      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>

      <div className="header-student-detail">
        <h1 className="title-student-detail">Student Detail</h1>
      </div>
      <Form className="form-student">
        <div className="form-student-detail">
          <div className="form-detail-col-left">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Tên Thánh</Form.Label>
              <Form.Label>{students.holyName}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Họ Tên</Form.Label>
              <Form.Label>
                {students.lastName + " "}
                {students.middleName + " "}
                {students.firstName}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Ngày Sinh</Form.Label>
              <Form.Label>{students.birthday}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Giới Tính</Form.Label>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    required
                    inline
                    label="Male"
                    name="gender"
                    type={type}
                    id={`inline-${type}-1`}
                    value={"male" && students.gender === "1" ? true : false}
                    defaultChecked={students.gender === "Male"}
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type={type}
                    id={`inline-${type}-2`}
                    value={"female" && students.gender === "1" ? true : false}
                    defaultChecked={students.gender === "Female"}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Số Điện Thoại</Form.Label>
              <Form.Label>{students.phoneNumber}</Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="title-info">Địa Chỉ</Form.Label>
              <Form.Label>
                {students.address + " "}
                {students.city}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="form-detail-col-right">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="title-info">Username</Form.Label>
              <Form.Label>{students.username}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="title-info">Password</Form.Label>
              <Form.Label>{students.password}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Email</Form.Label>
              <Form.Label>{students.email}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Ngày Rửa Tội</Form.Label>
              <Form.Label>{students.baptismDay}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Nơi Rửa Tội</Form.Label>
              <Form.Label>{students.baptismPlace}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Họ Tên Cha</Form.Label>
              <Form.Label>
                {students.holyNameFather + " "}
                {students.fatherName}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Họ Tên Mẹ</Form.Label>
              <Form.Label>
                {students.holyNameMother + " "}
                {students.motherName}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Lớp Cũ</Form.Label>
              <Form.Label>{students.oldClass}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="title-info">Lớp Mới</Form.Label>
              <Form.Label>{students.newClass}</Form.Label>
            </Form.Group>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0rem 1rem 1rem 0",
          }}
        >
          <Link
            to={`/editstudent/${students.id}`}
            style={{ marginRight: "10px", width: "80px", height: "38px" }}
            className="btn btn-secondary button-icon"
          >
            Edit
          </Link>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentDetail;
