
import { takeEvery, call, put } from "redux-saga/effects";
import {fetchStudentsRequest, fetchStudentsSuccess, fetchStudentsFailed} from "../action"
import {FETCH_STUDENTS_REQUEST} from "../action"


const fetchStudentsAPI = async ()=>{                        

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

//worker saga: handle api

function* fetchStudentsSaga(){

    try{
        const students =yield call(fetchStudentsAPI);
        yield put(fetchStudentsSuccess(students)); // if succes action

    }   catch(error){

              yield put(fetchStudentsFailed (error.message));  // if failed action
    }

}
//watcher saga

function* studentSaga(){

    yield takeEvery(FETCH_STUDENTS_REQUEST,fetchStudentsSaga );// listen the action
}


export default studentSaga ;