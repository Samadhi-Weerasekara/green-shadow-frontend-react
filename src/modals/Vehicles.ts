
export class Vehicles {
    vehicle_id: string;
    license_plate: string;
    category: string;
    fuel_type: string;
    staff_id: string;
    remarks: string;
    status: Status;


    constructor(vehicle_id: string, license_plate: string, category: string, fuel_type: string, staff_id: string, remarks: string, status: Status) {
        this.vehicle_id = vehicle_id;
        this.license_plate = license_plate;
        this.category = category;
        this.fuel_type = fuel_type;
        this.staff_id = staff_id;
        this.remarks = remarks;
        this.status = status;
    }
}

export type Status = "active" | "inactive";