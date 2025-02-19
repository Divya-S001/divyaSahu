import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import studentReducer from "./reducers/studentReducer"; 
import studentSaga from "./sagas/studentSaga"; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    students: studentReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(studentSaga); 

export default store;
