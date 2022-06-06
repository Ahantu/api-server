import { villageModel, cellModel, sectorModel, districtModel } from "../models"
import { geoEncodeAddress } from "../services/googlemaps"
import { IResults } from "../interfaces"
import { logger } from "../util/logger"
import { any } from "joi"

const queryByAdress = async (address: string) => {
    const geoLocation = await geoEncodeAddress(address)

}

export const queryByLocation = async (lat: number, long: number): Promise<IResults | undefined> => {
    try {
        const village = await villageModel.findOne({
            geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } }
        })
        const cell = await cellModel.findOne({
            geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } }
        })
        const district = await districtModel.findOne({
            geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } }
        })

        const sector = await sectorModel.findOne({
            geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } }
        })
        let results = {
            village: village ? village.name : 'N/A',
            cell: cell ? cell.name : 'N/A',
            district: district ? district?.district : 'N/A',
            sector: sector ? sector.name : 'N/A',
            province: sector ? sector.province : 'N/A',
        }
        return results
    } catch (e) {
        logger.error(e)
        throw (e)
    }

}

const whatsAppQuery = async (): Promise<void> => {

}