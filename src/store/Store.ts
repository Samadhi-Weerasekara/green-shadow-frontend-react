import {configureStore} from "@reduxjs/toolkit";
import cropSlice from "../reducers/CropSlice.ts";
import fieldSlice from "../reducers/FieldSlice.ts";
import staffSlice from "../reducers/StaffSlice.ts";
import equipmentSlice from "../reducers/EquipmentSlice.ts";
import monitorLogsSlice from "../reducers/MonitorLogsSlice.ts";
import vehicleSlice from "../reducers/VehicleSlice.ts";
import userSlice from "../reducers/UserSlice.ts";

export  const store = configureStore({
    reducer: {
        crop: cropSlice,
        field: fieldSlice,
        staff: staffSlice,
        equipment: equipmentSlice,
        vehicle: vehicleSlice,
        logs: monitorLogsSlice,
        user: userSlice,
    }
})