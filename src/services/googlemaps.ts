import {Client, GeocodeRequest} from "@googlemaps/google-maps-services-js";
import NodeGeocoder, {Options} from 'node-geocoder'
import config from '../config/index'
import { logger } from "../util/logger";


const client = new Client()
interface GeoResult {
    lat:number;
    lng:number
}


export const geoEncodeAddress = async (addressQuery:string) => {
   try{
       console.log(config)
    const apiOptions:GeocodeRequest = {
        params:{
            address:addressQuery,
            client_id:'',
            client_secret:'',
    
        }
    }
    const response = await client.geocode(apiOptions)
    console.log(response.data)
    return response.data.results[0].geometry.location
   }catch(e){
       logger.error(e)
    
   }
}

