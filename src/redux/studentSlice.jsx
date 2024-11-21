import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState =  {
    students:[],
    loading:false,
    error:null,
}

export const fetchData = createAsyncThunk('student/fetchData', async () => {
    const data = [
        {id:1, user:'Student 1', status:'2nd Semester'},  
        {id:2, user:'Student 2', status:'4th Semester'},
        {id:3, user:'Student 3', status:'6th Semester'},
        {id:4, user:'Student 4', status:'3rd Semester'},
        {id:5, user:'Student 5', status:'8th Semester'},
    ];
    return data;
});


const studentSlice = createSlice ({
    name: 'student',
    initialState, 
    reducers:{
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        editStudent: (state, action) => {
            state.students = state.students.map(student => (
                student.id === action.payload.id ? action.payload : student 
            ));
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(student => student.id !== action.payload );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.students = action.payload;
        }),
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice;


