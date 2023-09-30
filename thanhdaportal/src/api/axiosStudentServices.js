import axios from "axios";
import http from "../http-common";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/ms-user";

const getStudents = () => {
    return axios.get(STUDENT_API_BASE_URL + "/ms-user/all-users?id=ALL");
};

const updateStudent = (id, data) => {
  return http.put(`/edit/?id=${id}`, data);
};

const StudentService = {
  getStudents,
  updateStudent,
};

export default StudentService;