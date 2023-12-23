import React, { useEffect, useState } from "react";
import "./NewStudents.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  MenuItem,
} from "@mui/material";
import Sidebar from "../../../../../components/SideBar/Sidebar";
import { styled } from "@mui/material/styles";
import city from "../../../../../api/city";
import district from "../../../../../api/district";
import wards from "../../../../../api/wards";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const NewStudents = () => {
  const navigate = useNavigate();

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
    image: "",
  };

  const [students, setStudents] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState(null);
  const [cityid, setCityID] = useState([]);
  const [wardid, setWardId] = useState([]);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudents({ ...students, [name]: value });
  };

  const handleImageChange = (event) => {
    console.log(event.target.files);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleClose = () => {
    setStudents(initialValues);
    setSubmitted(false);
    navigate("/student");
  };

  const cityHandler = (e) => {
    const cityID = e.target.value;
    console.log(cityID);
    setCityID(cityID);
    setWardId("");
  };

  const wardsHandler = (e) => {
    const id_wards = e.target.value;
    console.log(id_wards);
    setWardId(id_wards);
  };

  const saveStudents = () => {
    //console.log("check new student: ", newStudents);
    const isValid = checkValidInput();
    if (isValid === true) {
      const formData = new FormData();
      formData.append("image", image);

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
        .post("http://localhost:8080/api/ms-user/create", data, formData)
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
          navigate("/student");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const checkValidInput = () => {
    let isValid = true;
    if (!initialValues.firstName) {
      console.log("check input first name: ", initialValues.firstName);
      isValid = false;
      alert("Missing params: " + initialValues.firstName);
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const newStudents = () => {
    setStudents(initialValues);
    setSubmitted(false);
  };

  const loadStudents = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/ms-user/all-users?id=ALL"
    );
    setStudents(result.data);
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
            <Link to="/addstudent" className="breadcrumbLink">
              Thêm mới Thiếu Nhi
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>Thêm mới Thiếu Nhi</h2>
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "25rem", padding: "1rem" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      // value={students.image}
                      onChange={handleImageChange}
                      required
                    />
                    {image ? (
                      <Image
                        src={image}
                        style={{
                          width: "250px",
                          height: "250px",
                          marginTop: "10px",
                        }}
                      />
                    ) : null}
                    <Form.Control.Feedback type="invalid">
                      Please choose your image.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tên Thánh</Form.Label>
                    <Form.Control
                      type="text"
                      name="holyName"
                      placeholder="Tên Thánh"
                      value={students.holyName}
                      onChange={handleInputChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your holy name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Họ</Form.Label>
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
                    <Form.Label>Tên Lót</Form.Label>
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
                    <Form.Label>Tên</Form.Label>
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
                    <Form.Label>Ngày Sinh</Form.Label>
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
                          value={
                            "male" && students.gender === "1" ? true : false
                          }
                          defaultChecked={students.gender === "Male"}
                          onChange={handleInputChange}
                          // feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                        <Form.Check
                          required
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                          value={
                            "female" && students.gender === "1" ? true : false
                          }
                          defaultChecked={students.gender === "Female"}
                          onChange={handleInputChange}
                          // feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </div>
                    ))}
                    <Form.Control.Feedback type="invalid">
                      You must agree before submitting.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Số Điện Thoại</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Số điện thoại"
                      name="phoneNumber"
                      value={students.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: "25rem", padding: "1rem" }}>
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
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ display: "grid" }}
                  >
                    <Form.Label>Thành Phố</Form.Label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      size="small"
                      onChange={cityHandler}
                    >
                      {Object.keys(city).map((option) => {
                        const cityData = city[option];
                        return (
                          <MenuItem key={option} value={cityData.code}>
                            {cityData.name}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ display: "grid" }}
                  >
                    <Form.Label>Quận Huyện</Form.Label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      size="small"
                      onChange={wardsHandler}
                    >
                      {Object.keys(district).map((option) => {
                        const districtData = district[option];
                        if (districtData.parent_code === cityid) {
                          return (
                            <MenuItem key={option} value={districtData.code}>
                              {districtData.name_with_type}
                            </MenuItem>
                          );
                        }
                      })}
                    </TextField>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ display: "grid" }}
                  >
                    <Form.Label>Phường Xã</Form.Label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      size="small"
                    >
                      {Object.keys(wards).map((option) => {
                        const wardsData = wards[option];
                        if (wardsData.parent_code === wardid) {
                          return (
                            <MenuItem key={option} value={wardsData.code}>
                              {wardsData.name_with_type}
                            </MenuItem>
                          );
                        }
                      })}
                    </TextField>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={students.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Username</Form.Label>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={students.password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: "25rem", padding: "1rem" }}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ngày Rửa Tội</Form.Label>
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
                    <Form.Label>Nơi Rửa Tội</Form.Label>
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
                    <Form.Label>Tên Thánh Cha</Form.Label>
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
                    <Form.Label>Họ Tên Cha</Form.Label>
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
                    <Form.Label>Tên Thánh Mẹ</Form.Label>
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
                    <Form.Label>Họ Tên Mẹ</Form.Label>
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
                    <Form.Label>Lớp Cũ</Form.Label>
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
                    <Form.Label>Lớp Mới</Form.Label>
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
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" type="submit" onClick={saveStudents}>
                  Save Changes
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  style={{ marginLeft: "10px" }}
                >
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

export default NewStudents;
