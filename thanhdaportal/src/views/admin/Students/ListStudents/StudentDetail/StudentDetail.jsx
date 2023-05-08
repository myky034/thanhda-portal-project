import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const StudentDetail = () => {
  const [isLoading, setisLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

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

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh</Form.Label>
          <Form.Control
            type="text"
            name="holyName"
            placeholder="Tên Thánh"
            value={students.holyName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Họ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ"
            name="firstName"
            value={students.firstName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Tên Lót</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Lót"
            name="middleName"
            value={students.middleName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên"
            name="lastName"
            value={students.lastName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={students.email}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={students.username}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={students.password}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ngày Sinh</Form.Label>
          <Form.Control
            type="text"
            name="birthday"
            value={students.birthday}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Số Điện Thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Số điện thoại"
            name="phoneNumber"
            value={students.phoneNumber}
            //onChange={handleInputChange}
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
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type={type}
                id={`inline-${type}-2`}
                value={"female" && students.gender === "1" ? true : false}
                defaultChecked={students.gender === "Female"}
                //onChange={handleInputChange}
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
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Thành Phố</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="city"
            value={students.city}
            //onChange={handleInputChange}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ngày Rửa Tội</Form.Label>
          <Form.Control
            type="text"
            name="baptismDay"
            value={students.baptismDay}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nơi Rửa Tội</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nơi Rửa Tội"
            name="baptismPlace"
            value={students.baptismPlace}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh Cha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Thánh Cha"
            name="holyNameFather"
            value={students.holyNameFather}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Họ Tên Cha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ Tên Cha"
            name="fatherName"
            value={students.fatherName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Thánh Mẹ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên Thánh Mẹ"
            name="holyNameMother"
            value={students.holyNameMother}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Họ Tên Mẹ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ Tên Mẹ"
            name="motherName"
            value={students.motherName}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lớp Cũ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lớp Cũ"
            name="oldClass"
            value={students.oldClass}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lớp Mới</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lớp Mới"
            name="newClass"
            value={students.newClass}
            //onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Role</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="role"
            value={students.role}
            //onChange={handleInputChange}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="secondary"
            //onClick={newStudents && handleClose}
            style={{ marginRight: "10px" }}
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
