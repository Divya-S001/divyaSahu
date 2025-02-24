// import { all } from "redux-saga/effects";
// import createSagaMiddleware from "redux-saga";
// import rewardsSaga from "./sagafile";
// import rewardsReducer from "./slice";
// import { configureStore } from "@reduxjs/toolkit";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({

//     reducer:{
//         rewards : rewardsReducer,
//     },

//     middleware: (getDefaultMiddleware)=>
//         getDefaultMiddleware({tunk: false}).concat(sagaMiddleware),

// });

// function* rootsaga(){
//     yield all ([rewardsSaga()]);
// }
// sagaMiddleware.run(rootsaga);

// export default store;