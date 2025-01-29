
export class Equipments{
    equipment_id:string;
    equipment_name:string;
    type:Type;
    status:Status;
    assigned_staff:string;
    assigned_field:string;


    constructor(equipment_id: string, equipment_name: string, type: Type, status: Status, assigned_staff: string, assigned_field: string) {
        this.equipment_id = equipment_id;
        this.equipment_name = equipment_name;
        this.type = type;
        this.status = status;
        this.assigned_staff = assigned_staff;
        this.assigned_field = assigned_field;
    }
}

export type Type = 'Electrical | Mechanical '

export type Status = 'Available | Not Available'
