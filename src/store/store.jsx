import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../redux/taskSlice.jsx';
// import studentReducer from '../redux/studentSlice.jsx';


const store = configureStore({
    reducer: { 
        tasks: taskReducer,
        // student: studentReducer,
    },
});

export default store;