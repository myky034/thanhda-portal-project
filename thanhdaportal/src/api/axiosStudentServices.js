import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api";

const getStudents = () => {
    return axios.get(STUDENT_API_BASE_URL + "/ms-user/all-users?id=ALL");
};

const StudentService = {
    getStudents,
}

export default StudentService;