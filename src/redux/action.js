// import { ADD_TO_CART } from "./Constant"

// export const addtoCart = ()=> {

//     console.warn("action is called")

//     return {

//         type:ADD_TO_CART,
//         data: "Hello"
//     }
// }


export const FETCH_STUDENTS_REQUEST ='FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILED  = 'FETCH_STUDENTS_FAILED';




export const fetchStudentsRequest = ()=>
    ({type: FETCH_STUDENTS_REQUEST});

export const fetchStudentsSuccess = (students)=>
    ({type: FETCH_STUDENTS_SUCCESS, payload: students});

export const fetchStudentsFailed = (error)=>
    ({type: FETCH_STUDENTS_FAILED, payload: error});