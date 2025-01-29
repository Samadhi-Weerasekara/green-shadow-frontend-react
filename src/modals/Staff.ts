

export class Staff {
    staff_id:string;
    staff_firstname:string;
    staff_lastname:string;
    designation:string;
    gender:Gender;
    joined_date:Date;
    dob:Date;
    email:string;
    contact_no:string;
    address:string;
    role:Role


    constructor(staff_id: string, staff_firstname: string, staff_lastname: string, designation: string, gender: Gender, joined_date: Date, dob: Date, email: string, contact_no: string, address: string, role: Role) {
        this.staff_id = staff_id;
        this.staff_firstname = staff_firstname;
        this.staff_lastname = staff_lastname;
        this.designation = designation;
        this.gender = gender;
        this.joined_date = joined_date;
        this.dob = dob;
        this.email = email;
        this.contact_no = contact_no;
        this.address = address;
        this.role = role;
    }
}

export type Role = "Admin" | "User" | "Manager";

export type Gender = "Male" | "Female";