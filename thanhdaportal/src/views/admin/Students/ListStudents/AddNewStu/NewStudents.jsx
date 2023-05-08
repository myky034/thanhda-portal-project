import React, { useState } from "react";
import "./NewStudents.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const NewStudents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = {
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
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudents({ ...students, [name]: value });
  };

  const saveStudents = () => {
    //console.log("check new student: ", newStudents);
    const isValid = checkValidInput();
    if (isValid === true) {
      let data = {
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

      //POST method
      axios
        .post("http://localhost:8080/api/ms-user/create", data)
        .then(function (res) {
          setStudents({
            firstName: res.data.firstName,
            middleName: res.data.middleName,
            lastName: res.data.lastName,
            username: res.data.username,
            password: res.data.password,
            email: res.data.email,
            birthday: res.data.birthday,
            phoneNumber: res.data.phoneNumber,
            gender: res.data.gender,
            address: res.data.address,
            city: res.data.city,
            baptismDay: res.data.baptismDay,
            baptismPlace: res.data.baptismPlace,
            role: res.data.role,
            holyName: res.data.holyName,
            oldClass: res.data.oldClass,
            newClass: res.data.newClass,
            holyNameFather: res.data.holyNameFather,
            fatherName: res.data.fatherName,
            holyNameMother: res.data.holyNameMother,
            motherName: res.data.motherName,
          });
          setSubmitted(true);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "firstName",
      "middleName",
      "lastName",
      "username",
      "password",
      "email",
      "birthday",
      "phoneNumber",
      "gender",
      "address",
      "city",
      "baptismDay",
      "baptismPlace",
      "role",
      "holyName",
      "oldClass",
      "newClass",
      "holyNameFather",
      "fatherName",
      "holyNameMother",
      "motherName",
    ];
    for (let i = 0; i > arrInput.length; i++) {
      if (!initialValues.firstName) {
        console.log("check input first name: ", initialValues.firstName);
        isValid = false;
        alert("Missing params: " + initialValues.firstName);
        break;
      }
    }
    return isValid;
  };

  const newStudents = () => {
    setStudents(initialValues);
    setSubmitted(false);
  };

  const onSubmit = (values, props) => {
    console.log(values);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Thêm Mới
      </Button>

      <Modal show={show} onHide={handleClose} scrollable="true" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Thêm Học Sinh</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
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
                    // isInvalid={!!errors.gender}
                    // feedback={errors.terms}
                    // feedbackType="invalid"
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
                    // isInvalid={!!errors.gender}
                    // feedback={errors.terms}
                    // feedbackType="invalid"
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Địa Chỉ</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Địa chỉ"
                name="address"
                value={students.address}
                onChange={handleInputChange}
                //isInvalid={!!errors.address}
              />
              {/* <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Thành Phố</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="city"
                value={students.city}
                onChange={handleInputChange}
                //isInvalid={!!errors.city}
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {/* <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày Rửa Tội</Form.Label>
              <Form.Control
                type="text"
                name="baptismDay"
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="role"
                value={students.role}
                onChange={handleInputChange}
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="secondary"
                onClick={newStudents && handleClose}
                style={{ marginRight: "10px" }}
              >
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={saveStudents}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewStudents;
