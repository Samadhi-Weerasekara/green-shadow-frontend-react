import {MonitorLogs} from "../modals/MonitorLogs.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: MonitorLogs[] = [];

const monitorLogsSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        addLog(state, action) {
            state.push(action.payload);
        },

        updateLog(state, action) {
            const index = state.findIndex(logs => logs.log_code === action.payload.log_code);
            if (index != -1) {
                state[index]=(action.payload)
            }
        },

        deleteLog(state,action){
            const index=state.findIndex(logs=>logs.log_code===action.payload.log_code);
            if (index !== -1) {
                state.splice(index, 1);
            }

        }
    },
})

export const {addLog,updateLog,deleteLog}=monitorLogsSlice.actions;
export default monitorLogsSlice.reducer;