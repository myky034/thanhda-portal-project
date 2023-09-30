import http from '../../http-common';

const getAll = () => {
    return http.get("/ms-user/all-users?id=ALL");
};

const get = id => {
    return http.get("/ms-user/all-users/${id}");
};

const create = data => {
    return http.post("/ms-user/create", data);
}

const StudentService = {
    getAll,
    get,
    create
}

export default StudentService;