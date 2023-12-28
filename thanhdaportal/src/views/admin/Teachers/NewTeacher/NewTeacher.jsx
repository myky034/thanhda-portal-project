import React, { useEffect, useState } from "react";
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
import Sidebar from "../../../../components/SideBar/Sidebar";
import { styled } from "@mui/material/styles";
import city from "../../../../api/city";
import district from "../../../../api/district";
import wards from "../../../../api/wards";
import khoi from "../../../../api/khoi";
import lop from "../../../../api/lop";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const NewTeacher = () => {
  const navigate = useNavigate();

  const initialValues = {
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
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState(null);
  const [cityid, setCityID] = useState([]);
  const [wardid, setWardId] = useState([]);
  const [khoiid, setKhoiId] = useState([]);
  const [lopid, setLopId] = useState([]);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    loadTeachers();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleImageChange = (event) => {
    console.log(event.target.files);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleClose = () => {
    setTeacher(initialValues);
    setSubmitted(false);
    navigate("/teacher");
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

  const khoiHandler = (e) => {
    const id_khoi = e.target.value;
    console.log(id_khoi);
    setKhoiId(id_khoi);
    setLopId("");
  };

  const lopHandler = (e) => {
    const id_lop = e.target.value;
    console.log(id_lop);
    setLopId(id_lop);
  };

  const saveTeachers = () => {
    //console.log("check new student: ", newStudents);
    const isValid = checkValidInput();
    if (isValid === true) {
      const formData = new FormData();
      formData.append("image", image);

      let data = {
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        password: teacher.password,
        email: teacher.email,
        phone: teacher.phone,
        baptismDay: teacher.baptismDay,
        holyName: teacher.holyName,
        class: teacher.class,
        deparment: teacher.deparment,
      };

      //POST method
      axios
        .post(
          "https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers",
          data,
          formData
        )
        .then(function (res) {
          setTeacher({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            password: res.data.password,
            email: res.data.email,
            phone: res.data.phone,
            baptismDay: res.data.baptismDay,
            holyName: res.data.holyName,
            class: res.data.class,
            deparment: res.data.deparment,
          });
          setSubmitted(true);
          console.log(res.data);
          navigate("/teacher");
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

  const loadTeachers = async () => {
    const result = await axios.get(
      "https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers"
    );
    setTeacher(result.data);
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
            <Link to="/teacher" className="breadcrumbLink">
              Giáo Lý Viên
            </Link>
            <Link to="/addteacher" className="breadcrumbLink">
              Thêm mới GLV
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>Thêm mới GLV</h2>
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
                <div style={{ width: "50%", padding: "1rem" }}>
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
                      value={teacher.holyName}
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
                      value={teacher.lastName}
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
                      value={teacher.middleName}
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
                      value={teacher.firstName}
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
                            "male" && teacher.gender === "1" ? true : false
                          }
                          defaultChecked={teacher.gender === "Male"}
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
                            "female" && teacher.gender === "1" ? true : false
                          }
                          defaultChecked={teacher.gender === "Female"}
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
                      value={teacher.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ width: "50%", padding: "1rem" }}>
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
                        return null;
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
                        return null;
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
                      value={teacher.email}
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
                      value={teacher.password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{ display: "grid" }}
                  >
                    <Form.Label>Khối</Form.Label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      size="small"
                      onChange={khoiHandler}
                      defaultValue="Khối"
                    >
                      {Object.keys(khoi).map((option) => {
                        const khoiData = khoi[option];
                        return (
                          <MenuItem key={option} value={khoiData.code}>
                            {khoiData.name}
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
                    <Form.Label>Lớp</Form.Label>
                    <TextField
                      id="outlined-select-currency"
                      select
                      size="small"
                      onChange={lopHandler}
                    >
                      {Object.keys(lop).map((option) => {
                        const lopData = lop[option];
                        if (lopData.parent_code === khoiid) {
                          return (
                            <MenuItem key={option} value={lopData.code}>
                              {lopData.name_with_type}
                            </MenuItem>
                          );
                        }
                        return null;
                      })}
                    </TextField>
                  </Form.Group>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" type="submit" onClick={saveTeachers}>
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

export default NewTeacher;
