import {
  CREATE_STUDENT,
  RETRIEVE_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  DELETE_ALL_STUDENT,
} from "../actions/types";

const initialState = [];

function studentReducer(student = initialState, action) {

    switch (action.type) {
        case CREATE_STUDENT:
            return [...student, action.payload];

        case RETRIEVE_STUDENT:
            return action.payload;    
    
        default:
            return student;
    }
};

export default studentReducer;