import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/material/styles";
import Sidebar from "../../../../../components/SideBar/Sidebar";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import "./StudentDetail.scss"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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
      .get("https://6520be0e906e276284c4a193.mockapi.io/thanhdaportal/students/" + id)
      .then((res) => {
        setStudents(res.data);
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
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        <Box sx={{ height: "44px" }}>
          <DrawerHeader />
        </Box>
        <div style={{ marginBottom: "1rem" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to="/student"
              className="breadcrumbLink"
            >
              Thiếu Nhi
            </Link>
            <Link
              to={`/studentdetail/${students.id}`}
              aria-current="page"
              className="breadcrumbLink"
            >
              Thông tin chi tiết
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <h2>Thông tin chi tiết</h2>
          </div>
        </div>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{
            margin: "0px",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          }}
        >
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
            }}
          >
            <Form className="form-student">
              <div className="form-student-detail" style={{ display: "flex" }}>
                <div className="form-detail-col-left" style={{ width: "50rem", padding: "1rem" }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Tên Thánh</Form.Label>
                    <Form.Label>{students.holyName}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Họ Tên</Form.Label>
                    <Form.Label>
                      {students.lastName + " "}
                      {students.middleName + " "}
                      {students.firstName}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Ngày Sinh</Form.Label>
                    <Form.Label>{students.birthday}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Giới Tính</Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          required
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                          value={"male" && students.gender === "true" ? true : false}
                          defaultChecked={students.gender === "Male"}
                          onChange={handleInputChange}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                          value={"female" && students.gender === "true" ? true : false}
                          defaultChecked={students.gender === "Female"}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Số Điện Thoại</Form.Label>
                    <Form.Label>{students.phoneNumber}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Địa Chỉ</Form.Label>
                    <Form.Label>
                      {students.address + " "}
                      {students.city}
                    </Form.Label>
                  </Form.Group>
                </div>
                <div className="form-detail-col-right" style={{ width: "50rem", padding: "1rem" }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Username</Form.Label>
                    <Form.Label>{students.username}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Password</Form.Label>
                    <Form.Label>{students.password}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Email</Form.Label>
                    <Form.Label>{students.email}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Ngày Rửa Tội</Form.Label>
                    <Form.Label>{students.baptismDay}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Nơi Rửa Tội</Form.Label>
                    <Form.Label>{students.baptismPlace}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Họ Tên Cha</Form.Label>
                    <Form.Label>
                      {students.holyNameFather + " "}
                      {students.fatherName}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Họ Tên Mẹ</Form.Label>
                    <Form.Label>
                      {students.holyNameMother + " "}
                      {students.motherName}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Lớp Cũ</Form.Label>
                    <Form.Label>{students.oldClass}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Lớp Mới</Form.Label>
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StudentDetail;
