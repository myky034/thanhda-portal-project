import {
  CREATE_STUDENT,
  RETRIEVE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  DELETE_ALL_STUDENT,
} from "./types";

import StudentService from "../services/StudentService";

export const retrieveStudent = () => async (dispatch) => {
    try {
        const res = await StudentService.getAll();

        dispatch({
            type: RETRIEVE_STUDENT,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const createStudent =
  (firstName,
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
  updatedAt) => async (dispatch) => {
    try {
        const res = await StudentService.create({
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
        });

        dispatch({
            type: CREATE_STUDENT,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
  };
