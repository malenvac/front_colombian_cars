import { axiosConfig } from "../helpers/axios-config"

const registerVehicleEntry = (data) => {
    return axiosConfig.post('vehicle/registerEntry',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllVehicles = () => {
    return axiosConfig.get('vehicle/findAllVehicles',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllTickets = () => {
    return axiosConfig.get('ticket/findAllTickets',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const registerVehicleDeparture = (vehicleLicensePlate) => {
    return axiosConfig.put(`vehicle/registerDeparture/${vehicleLicensePlate}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    registerVehicleEntry, getAllVehicles, getAllTickets, registerVehicleDeparture,
}