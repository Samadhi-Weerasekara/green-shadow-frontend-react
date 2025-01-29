export class Field {
    field_id:string;
    field_name:string;
    location:string;
    extent_size:number;
    field_image1:string;
    field_image2:string;


    constructor(field_id: string, field_name: string, location: string, extent_size: number, field_image1: string, field_image2: string) {
        this.field_id = field_id;
        this.field_name = field_name;
        this.location = location;
        this.extent_size = extent_size;
        this.field_image1 = field_image1;
        this.field_image2 = field_image2;
    }
}
