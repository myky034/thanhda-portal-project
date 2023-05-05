import React, { useState, useEffect } from "react";
import "./ListStudents.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { IoSquareOutline } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { DataGrid } from "@mui/x-data-grid";

const ListStudents = () => {
  // const [currentStudents, setCurrentStudents] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);

  // const dispatch = useDispatch();
  // const students = useSelector((state) => state.studentReducer);

  // console.log(students);

  // useEffect(() => {
  //   dispatch(retrieveStudent());
  // }, [dispatch]);

  const [isLoading, setisLoading] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setisLoading(true);

    //GET method
    axios
      .get("http://localhost:8080/api/ms-user/all-users?id=ALL")
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

  const handleEdit = (e, rows) => {
    console.log("Clicked!");
  };

  const handleDelete = (e, del) => {
    console.log("Clicked!");
  }

  const columns = [
    {
      field: "action",
      headerName: "",
      width: 50,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <button className="button-icon" onClick={handleDelete}>
              <IoIosEye className="icon" />
            </button>
          </>
        );
      },
    },
    { field: "holyName", headerName: "Tên Thánh", width: 100, editable: false },
    {
      field: "firstName",
      headerName: "Tên Thánh",
      width: 100,
      editable: false,
      hide: true,
    },
    {
      field: "middleName",
      headerName: "Tên Thánh",
      width: 100,
      editable: false,
      hide: true,
    },
    {
      field: "lastName",
      headerName: "Tên Thánh",
      width: 100,
      editable: false,
      hide: true,
    },
    {
      field: "fullname",
      headerName: "Họ Tên",
      width: 150,
      editable: false,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.middleName || ""} ${
          params.row.lastName || ""
        }`,
    },
    { field: "gender", headerName: "Giới Tính", width: 80, editable: false },
    { field: "birthday", headerName: "Ngày Sinh", width: 110, editable: false },
    {
      field: "baptismDay",
      headerName: "Ngày Rửa Tội",
      width: 130,
      editable: false,
    },
    {
      field: "baptismPlace",
      headerName: "Nơi Rửa Tội",
      width: 100,
      editable: false,
    },
    { field: "address", headerName: "Địa Chỉ", width: 160, editable: false },
    { field: "oldClass", headerName: "Lớp Cũ", width: 130, editable: false },
    { field: "newClass", headerName: "Lớp Mới", width: 130, editable: false },
    {
      field: "actions",
      headerName: "",
      width: 80,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <button className="button-icon" onClick={handleEdit}>
              <FiEdit className="icon" />
            </button>
            <button className="button-icon" onClick={handleDelete}>
              <FiTrash2 className="icon" />
            </button>
          </>
        );
      },
    },
  ];
  
  return (
    <div className="table-responsive-lg">
      <DataGrid
        rows={students}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          columns: {
            columnVisibilityModel: {
              firstName: false,
              middleName: false,
              lastName: false,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{fontSize: 14}}
      />
      {/* <table className="table p-5 table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="text-primar text-center" scope="col"></th>
            <th className="text-primar text-center" scope="col"></th>
            <th className="text-primar" scope="col">
              Tên Thánh
            </th>
            <th className="text-primar" scope="col">
              Họ Tên
            </th>
            <th className="text-primar" scope="col">
              Giới Tính
            </th>
            <th className="text-primar" scope="col">
              Ngày Sinh
            </th>
            <th className="text-primar" scope="col">
              Ngày Rửa Tội
            </th>
            <th className="text-primar" scope="col">
              Nơi Rửa Tội
            </th>
            <th className="text-primar" scope="col">
              Địa Chỉ
            </th>
            <th className="text-primar" scope="col">
              Lớp Cũ
            </th>
            <th className="text-primar" scope="col">
              Lớp Mới
            </th>
            <th className="text-primar" scope="col"></th>
            <th className="text-primar" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((item, index) => {
              return (
                <tr key={index} className="align-middle">
                  <td>
                    <IoSquareOutline />
                  </td>
                  <td>
                    <IoIosEye />
                  </td>
                  <td>{item.holyName}</td>
                  <td>
                    {item.firstName +
                      " " +
                      item.middleName +
                      " " +
                      item.lastName}
                  </td>
                  <td>{item.gender}</td>
                  <td>{item.birthday}</td>
                  <td>{item.baptismDay}</td>
                  <td>{item.baptismPlace}</td>
                  <td>{item.address}</td>
                  <td>{item.oldClass}</td>
                  <td>{item.newClass}</td>
                  <td>
                    <FiEdit />
                  </td>
                  <td>
                    <FiTrash2 />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table> */}
    </div>
  );
};

export default ListStudents;
