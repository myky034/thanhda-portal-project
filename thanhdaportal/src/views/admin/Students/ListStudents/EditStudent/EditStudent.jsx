import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box, Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "react-bootstrap/Image";
import Sidebar from "../../../../../components/SideBar/Sidebar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const EditStudent = () => {
  const { id } = useParams();
  const isAddMode = !id;
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
    image: "",
  };

  const [students, setStudents] = useState(initialValues);
  const [isLoading, setisLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setisLoading(true);

    //GET method
    axios
      .get(
        "https://6520be0e906e276284c4a193.mockapi.io/thanhdaportal/students/" +
          id
      )
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
  };

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
      image: students.image,
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
          p: 3,
        }}
      >
        <Box sx={{ height: "44px" }}>
          <DrawerHeader />
        </Box>
        <div style={{ marginBottom: "0.5rem" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/student" className="breadcrumbLink">
              Thiếu Nhi
            </Link>
            <Link
              to={`/studentdetail/${students.id}`}
              aria-current="page"
              className="breadcrumbLink"
            >
              Thông tin chi tiết
            </Link>
            <Link
              to={`/editstudent/${students.id}`}
              aria-current="page"
              className="breadcrumbLink"
            >
              Chỉnh sửa thông tin
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>
              {isAddMode
                ? "Thêm mới Thiếu Nhi"
                : "Chỉnh sửa thông tin Thiếu Nhi"}
            </h2>
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
              <div style={{ display: "flex" }}>
                <div style={{ width: "25rem", padding: "1rem" }}>
                  <Form.Group className="mb-3">
                    <Image src={students.image} rounded />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Tên Thánh
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="holyName"
                      placeholder="Tên Thánh"
                      value={students.holyName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Họ
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Họ"
                      name="lastName"
                      value={students.lastName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Tên Lót
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên Lót"
                      name="middleName"
                      value={students.middleName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Tên
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên"
                      name="firstName"
                      value={students.firstName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Ngày Sinh
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="birthday"
                      placeholder="Ngày sinh"
                      value={students.birthday}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Giới Tính
                    </Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          required
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                          value={students.gender}
                          checked={students.gender === true}
                          defaultChecked={students.gender === true}
                          onChange={handleInputChange}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                          value={students.gender}
                          checked={students.gender === false}
                          defaultChecked={students.gender === false}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </div>
                <div style={{ width: "25rem", padding: "1rem" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Số Điện Thoại
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Số điện thoại"
                      name="phoneNumber"
                      value={students.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Địa Chỉ
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Địa chỉ"
                      name="address"
                      value={students.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Thành Phố
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Thành phố"
                      name="city"
                      value={students.city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={students.username}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={students.password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={students.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: "25rem", padding: "1rem" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Ngày Rửa Tội
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="baptismDay"
                      placeholder="Ngày rửa tội"
                      value={students.baptismDay}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Nơi Rửa Tội
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nơi Rửa Tội"
                      name="baptismPlace"
                      value={students.baptismPlace}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Tên Thánh Cha
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên Thánh Cha"
                      name="holyNameFather"
                      value={students.holyNameFather}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Họ Tên Cha
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Họ Tên Cha"
                      name="fatherName"
                      value={students.fatherName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Tên Thánh Mẹ
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tên Thánh Mẹ"
                      name="holyNameMother"
                      value={students.holyNameMother}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Họ Tên Mẹ
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Họ Tên Mẹ"
                      name="motherName"
                      value={students.motherName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Lớp Cũ
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Lớp Cũ"
                      name="oldClass"
                      value={students.oldClass}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        marginRight: "2em",
                        width: "100%",
                      }}
                    >
                      Lớp Mới
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Lớp Mới"
                      name="newClass"
                      value={students.newClass}
                      onChange={handleInputChange}
                    />
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
                <Button
                  variant="secondary"
                  style={{ marginRight: "10px" }}
                  onClick={updateStudents}
                >
                  Update
                </Button>
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

export default EditStudent;
