import { axiosConfig } from "../helpers/axios-config"

const registerVehicleEntry = (data) => {
    return axiosConfig.post('vehicle/registerEntry',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

export {
    registerVehicleEntry,
}