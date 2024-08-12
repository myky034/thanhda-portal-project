/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../Teachers.scss";
import axios from "axios";
import { IoSquareOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import Avatar from "@mui/material/Avatar";
import moment from "moment";
import CustomizedCheckbox from "./../../../../components/Checkbox";
import BasicMenu from "../../../../components/MenuContext";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ListTeachers = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [teacher, setTeachers] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    setisLoading(true);
    getTeachers();
  }, []);

  //GET method
  const getTeachers = async () => {
    await axios
      .get("https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers")
      .then((res) => {
        setTeachers(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //DELETE method
  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://65865716468ef171392e27e0.mockapi.io/thanhda/ms-teachers/delete/?id=${id}`
      )
      .then(function (res) {
        setTeachers(res.data.users);
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='table-responsive'>
      <table className='table p-5 table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th
              className='text-primar'
              scope='col'>
              <CustomizedCheckbox />
            </th>
            <th
              className='text-primar'
              scope='col'>
              Name
            </th>
            <th
              className='text-primar'
              scope='col'>
              Teacher ID
            </th>
            <th
              className='text-primar'
              scope='col'>
              Class
            </th>
            <th
              className='text-primar'
              scope='col'>
              Department
            </th>
            <th
              className='text-primar'
              scope='col'>
              Status
            </th>
            <th
              className='text-primar'
              scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? teacher.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : teacher && teacher
          ).map((item) => {
            return (
              <>
                <tr className='align-middle'>
                  <td>
                    <CustomizedCheckbox />
                  </td>
                  <td className='text-primar'>
                    <div className='column-name'>
                      <div className='column-name user-avatar'>
                        <Avatar
                          {...stringAvatar("Kent Dodds")}
                          style={{ margin: "0px 10px 0px 0px" }}
                        />
                      </div>
                      <div className='column-name user-name'>
                        <div className='fullname'>
                          {item.holy_name +
                            item.last_name +
                            " " +
                            " " +
                            item.first_name}
                        </div>
                        <div className='email'>{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-primar'>
                    <span className='badge sub-id'>{"#" + item.id}</span>
                  </td>
                  <td className='text-primar'>
                    <div className='column-name user-name'>
                      <div className='fullname'>{item.className}</div>
                      <div className='email'>Official</div>
                    </div>
                  </td>
                  <td className='text-primar'>
                    <span className='badge sub-id'>{item.department}</span>
                  </td>
                  <td className='text-primar'>
                    <div className='badge sub-status'>
                      <span className='dot-status'></span>
                      <span>Active</span>
                    </div>
                  </td>
                  <td className='column-actions'>
                    <BasicMenu />
                  </td>
                  {/* <td>
                    <Link
                      onClick={() => handleDelete(item.id)}
                      className='button-icon'>
                      <FiTrash2 />
                    </Link>
                  </td> */}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <TablePagination
        component='div'
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ListTeachers;
