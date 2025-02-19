import { FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_FAILED } from "../action";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return { ...state, loading: true, error: null };
      
    case FETCH_STUDENTS_SUCCESS:
      return { ...state, loading: false, students: action.payload };

    case FETCH_STUDENTS_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default studentReducer;
