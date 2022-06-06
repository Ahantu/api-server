import { Document, Model } from "mongoose";
export interface ErrorResponse extends ErrorConstructor {
    status:number
    message:string
}


export interface Config {
    port:number;
    mongoURI:string;
    googleClientId:string;
    googleClientSecret:string;

}




export interface Geometry{
    geometry:{
        type:string;
        coordinates:[]
    }
}

export interface Village extends Document {
    name:string;
    district:string;
    village_id:string;
    cell_id:string;
    prov_id:string ;
    cell:string;
    sector:string;
    sector_id:string
    province:string;
    geometry:Geometry;
}

export interface IvillageModel extends Model<Village> {

}

export interface Sector extends Document {
    dist_id:number;
    district:string; 
    name:string;
    prov_id:string; 
    province:string
    sect_id:string; 
    geometry:Geometry;
}

export interface IsectorModel extends Model<Sector> {
}

export interface Cell extends Document {
    name:string
    prov_id:string;
    dist_id:string;
    district:string;
    sect_id:string;
    sector:string;
    cell_id:string
    geometry:Geometry;
}

export interface IcellModel extends Model<Cell>{

}

export interface  District extends Document{
    district:string;
    dist_id:string;
    geometry:Geometry;
}

export interface IdistrictModel extends Model<District>{

}

export interface IResults {
    cell:string,
    sector:string,
    district:string,
    village:string,
    province:string
}