import {Model, Schema, model} from "mongoose"
import {Village, District, Cell, Sector, IvillageModel, IdistrictModel, IcellModel, IsectorModel} from '../interfaces/index'


const geometrySchema = new Schema({
    type: {
        type: String, 
        enum: ['Polygon'],
        required: true
      },
      coordinates: {
        type: [[[Number]]]
      }
})


const villageSchema = new Schema<Village>({
    name:{
        type:String,
        required:true
    },

    district:{
        type:String 
    },
    village_id:{
        type:String 
    },

    cell_id:{
        type:String 
    }, 
    prov_id:{
        type:String 
    },
    cell:{
        type:String
    },

    sector:{
        type:String
    },

    province:{
        type:String
    }, 

    sector_id: {
        type:String
    },
    
    geometry:geometrySchema
}, {collection:"villages"})

const cellSchema = new Schema({
    prov_id:{
        type:String
    },

    dist_id:{
        type:String
    },
    district:{
        type:String
    },
    sect_id:{
        type:String
    },
    sector:{
        type:String
    },
    cell_id:    {
        type:String
    },

    geometry:geometrySchema,

    name:{
        type:String
    },

    
}, {collection:"cells"})

const districtSchema = new Schema<District>({
    district:{
        type:String
    },
    dist_id:{
        type:String
    },
    geometry:geometrySchema
    
}, {collection:"districts"})

const sectorSchema = new Schema<Sector>({
    prov_id:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    },
    sect_id:{
        type:String
    },
    name:{
        type:String
    },
    geometry:geometrySchema
}, {collection:"sectors"})


export const villageModel= model<Village, IvillageModel>('village', villageSchema)
export const cellModel = model<Cell, IcellModel>('cell', cellSchema)
export const districtModel = model<District, IdistrictModel>('district', districtSchema)
export const  sectorModel = model<Sector, IsectorModel>('sector', sectorSchema)