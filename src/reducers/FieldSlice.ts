import {Field} from "../modals/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState  :Field[] =[];

const fieldSlice=createSlice({

    name:'field',
    initialState,
    reducers:{
        addField(state,action){
            state.push(action.payload);
        },

        updateField(state,action){
            const index=state.findIndex(field=>field.field_id===action.payload.field_id)
            if (index !== -1) {
                state[index] = action.payload;
            }
        },

        deleteField(state,action){
            const index=state.findIndex(field=>field.field_id===action.payload.field_id)
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});


export const {addField,updateField,deleteField}=fieldSlice.actions;
export default fieldSlice.reducer;