import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, CssBaseline } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from 'react-bootstrap/Image';
import { styled } from "@mui/material/styles";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import moment from "moment";
import Sidebar from "../../../../components/SideBar/Sidebar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const TeachersDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    class: "",
    deparment: "",
    baptismDay: "",
    holyName: "",
    gender: "",
    image: ""
  };

  const [teacher, setTeacher] = useState(initialValues);
  const [isLoading, setisLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setisLoading(true);

    //GET method
    axios
      .get("https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers/" + id)
      .then((res) => {
        setTeacher(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setisLoading(true);
        console.log(error);
      });
  }, []);

  const handleClose = () => {
    setTeacher(initialValues);
    setSubmitted(false);
    navigate("/teacher");
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
        <div style={{ marginBottom: "0.5rem" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to="/student"
              className="breadcrumbLink"
            >
              Giáo Lý Viên
            </Link>
            <Link
              to={`/studentdetail/${teacher.id}`}
              aria-current="page"
              className="breadcrumbLink"
            >
              Thông tin chi tiết
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginBottom: "0.5rem" }}>
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
            <Form>
              <div style={{ display: "flex" }}>
                <div style={{ width: "30rem", padding: "1rem" }}>
                  <Form.Group className="mb-3" >
                    <Image src={teacher.image} rounded />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Tên Thánh</Form.Label>
                    <Form.Label>{teacher.holyName}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="title-info" style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Họ Tên</Form.Label>
                    <Form.Label>
                      {teacher.lastName + " "}
                      {teacher.middleName + " "}
                      {teacher.firstName}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Ngày Bổn Mạng</Form.Label>
                    <Form.Label>{moment(teacher.baptismDay).format("DD-MM-YYYY")}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: "flex" }}>
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Giới Tính</Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          required
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                          value={teacher.gender}
                          checked={teacher.gender === true}
                          defaultChecked={teacher.gender === true}
                          readOnly
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                          value={teacher.gender}
                          checked={teacher.gender === false}
                          defaultChecked={teacher.gender === false}
                          readOnly
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Số Điện Thoại</Form.Label>
                    <Form.Label>{teacher.phone}</Form.Label>
                  </Form.Group>
                </div>
                <div style={{ width: "30rem", padding: "1rem" }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Username</Form.Label>
                    <Form.Label>{teacher.username}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Password</Form.Label>
                    <Form.Label>{teacher.password}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Email</Form.Label>
                    <Form.Label>{teacher.email}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Lớp Cũ</Form.Label>
                    <Form.Label>{teacher.deparment}</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: "600", marginRight: "2em", width: "7em" }}>Lớp Mới</Form.Label>
                    <Form.Label>{teacher.class}</Form.Label>
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
                  to={`/editstudent/${teacher.id}`}
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

export default TeachersDetail;
