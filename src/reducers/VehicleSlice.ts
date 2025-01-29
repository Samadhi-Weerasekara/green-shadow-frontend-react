import {createSlice} from "@reduxjs/toolkit";
import {Vehicles} from "../modals/Vehicles.ts";

const initialState : Vehicles[] = [];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle(state, action) {
            state.push(action.payload);
        },
        updateVehicle: (state, action) => {
            const index = state.findIndex(vehicle => vehicle.vehicle_id === action.payload.vehicle_id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteVehicle: (state, action) => {
            const index = state.findIndex(vehicle => vehicle.vehicle_id === action.payload.vehicle_id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    },
});

export const { addVehicle, updateVehicle, deleteVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;