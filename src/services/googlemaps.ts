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
            client_id:'408849996673-r7ru7q5kv5f38mbvot73j77pbf9hjcr5.apps.googleusercontent.com',
            client_secret:'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',
    
        }
    }
    const response = await client.geocode(apiOptions)
    console.log(response.data)
    return response.data.results[0].geometry.location
   }catch(e){
       logger.error(e)
    
   }
}

