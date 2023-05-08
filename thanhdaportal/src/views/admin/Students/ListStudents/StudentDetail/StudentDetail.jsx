import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StudentService from "../../../../../api/axiosStudentServices";

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
  const [isLoading, setisLoading] = useState(false);
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

  const updateStudents = () => {

    // StudentService.updateStudent(students.id, students)
    //   .then((res) => {
    //     setStudents(res.data);
    //     console.log(res.data);
    //     navigate("/student");
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

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
        // setStudents({
        //   firstName: res.data.firstName,
        //   updatedAt: res.data.updatedAt,
        // });
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
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            placeholder="ID"
            value={students.id}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh</Form.Label>
          <Form.Control
            type="text"
            name="holyName"
            placeholder="Tên Thánh"
            value={students.holyName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Họ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ"
            name="firstName"
            value={students.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Tên Lót</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Lót"
            name="middleName"
            value={students.middleName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên"
            name="lastName"
            value={students.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={students.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={students.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={students.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ngày Sinh</Form.Label>
          <Form.Control
            type="text"
            name="birthday"
            placeholder="Ngày sinh"
            value={students.birthday}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Số Điện Thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Số điện thoại"
            name="phoneNumber"
            value={students.phoneNumber}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Giới Tính</Form.Label>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Địa Chỉ</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Địa chỉ"
            name="address"
            value={students.address}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Thành Phố</Form.Label>
          <Form.Control
            type="text"
            placeholder="Thành phố"
            name="city"
            value={students.city}
            onChange={handleInputChange}
          />
          {/* <Form.Select
            aria-label="Default select example"
            name="city"
            value={students.city}
            //onChange={handleInputChange}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ngày Rửa Tội</Form.Label>
          <Form.Control
            type="text"
            name="baptismDay"
            placeholder="Ngày rửa tội"
            value={students.baptismDay}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nơi Rửa Tội</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nơi Rửa Tội"
            name="baptismPlace"
            value={students.baptismPlace}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh Cha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Thánh Cha"
            name="holyNameFather"
            value={students.holyNameFather}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Họ Tên Cha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ Tên Cha"
            name="fatherName"
            value={students.fatherName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh Mẹ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Thánh Mẹ"
            name="holyNameMother"
            value={students.holyNameMother}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Họ Tên Mẹ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ Tên Mẹ"
            name="motherName"
            value={students.motherName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lớp Cũ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lớp Cũ"
            name="oldClass"
            value={students.oldClass}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lớp Mới</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lớp Mới"
            name="newClass"
            value={students.newClass}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="secondary"
            //onClick={newStudents && handleClose}
            style={{ marginRight: "10px" }}
            onClick={updateStudents}
          >
            Update
          </Button>
          <Button variant="primary" type="submit">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentDetail;
