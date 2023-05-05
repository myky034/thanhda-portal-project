import React, { useState } from "react";
import "./NewStudents.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createStudent } from "../../../../../redux/actions/students";

const NewStudents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState(new Date());

  //console.log("DATE", date);

  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    gender: "",
    address: "",
    city: "",
    baptismday: "",
    baptismplace: "",
    role: "",
  };

  const [students, setStudents] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudents({ ...students, [name]: value });
  };

  const saveStudents = () => {
    const {
      firstName,
      middleName,
      lastName,
      username,
      password,
      email,
      birthday,
      address,
      city,
      phoneNumber,
      gender,
      image,
      baptismDay,
      baptismPlace,
      createdAt,
      updatedAt,
    } = students;

    dispatch(
      createStudent(
        firstName,
        middleName,
        lastName,
        username,
        password,
        email,
        birthday,
        address,
        city,
        phoneNumber,
        gender,
        image,
        baptismDay,
        baptismPlace,
        createdAt,
        updatedAt
      )
    ).then(data => {
      setStudents({
        firstname: data.firstName,
        middlename: data.middleName,
        lastname: data.lastName,
        username: data.username,
        password: data.password,
        email: data.email,
        birthday: data.birthday,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        address: data.address,
        city: data.city,
        baptismday: data.baptismDay,
        baptismplace: data.baptismPlace,
        role: data.role,
      });
      setSubmitted(true);
      console.log(data);
    }).catch(e => {
      console.log(e);
    });
  };

  const newStudents = () => {
    setStudents(initialValues);
    setSubmitted(false);
  };

  const onSubmit = (values, props) => {
    console.log(values);
  };

  const validationStaffSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email !"),
    username: Yup.string().required("Please enter your username !"),
    password: Yup.string().required("Please enter your password !"),
    firstname: Yup.string().required("Please enter your first name !"),
    middlename: Yup.string().required("Please enter your middle name !"),
    lastname: Yup.string().required("Please enter your last name !"),
    birthday: Yup.string().required("Please enter your birthday !"),
    phoneNumber: Yup.string().required("Please enter your phone number !"),
    gender: Yup.string().required("Please choose your gender !"),
    address: Yup.string().required("Please enter your address !"),
    city: Yup.string()
      .oneOf(["1", "2", "3"], "Invalid position")
      .required("Please choose your position !"),
    baptismday: Yup.string().required("Please enter your baptism day !"),
    baptismplace: Yup.string().required("Please enter your baptism place !"),
    role: Yup.string()
      .oneOf(["1", "2", "3"], "Invalid role")
      .required("Please choose your role !"),
  });

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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationStaffSchema}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
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
                    // onBlur={handleBlur}
                    // isInvalid={!!errors.email}
                    // isValid={touched.email}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={students.username}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.username}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={students.password}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.password}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={students.firstname}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.firstname}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.firstname}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    name="middlename"
                    value={students.middlename}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.middlename}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.middlename}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={students.lastname}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.lastname}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.lastname}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthday"
                    value={date && students.birthday}
                    onChange={(e) => setDate(e.target.value) && handleInputChange}
                    //isValid={!!errors.birthday}
                    // isInvalid={errors.birthday}
                    // onBlur={handleBlur}
                  />
                  {/* {touched.birthday && errors.birthday ? (
                    <div className="error-mess">{errors.birthday}</div>
                  ) : null} */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    name="phonenumber"
                    value={students.phoneNumber}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.phoneNumber}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Gender</Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        required
                        inline
                        label="Male"
                        name="gender"
                        type={type}
                        id={`inline-${type}-1`}
                        value={"male" && students.gender === '1' ? true : false}
                        defaultChecked={values.gender === "Male" }
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
                        value={"female" && students.gender === '1' ? true : false}
                        defaultChecked={values.gender === "Female"}
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
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Address"
                    name="address"
                    value={students.address}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.address}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>City</Form.Label>
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Baptism Day</Form.Label>
                  <Form.Control
                    type="date"
                    name="baptismday"
                    value={date && students.baptismday}
                    onChange={(e) => setDate(e.target.value) && handleInputChange}
                    //isInvalid={!!errors.baptismday}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.baptismday}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Baptism Place</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Baptism Place"
                    name="baptismplace"
                    value={students.baptismplace}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.baptismplace}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.baptismplace}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="role"
                    value={students.role}
                    onChange={handleInputChange}
                    //isInvalid={!!errors.role}
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback> */}
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    style={{ marginRight: "10px" }}
                  >
                    Close
                  </Button>
                  <Button variant="primary" type="submit" onClick={saveStudents}>
                    Save Changes
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewStudents;
