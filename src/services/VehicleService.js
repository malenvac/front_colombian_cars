import { axiosConfig } from "../helpers/axios-config"

const registerVehicleEntry = (data) => {
    return axiosConfig.post('vehicles/registerEntry',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllVehicles = () => {
    return axiosConfig.get('vehicles/findAllVehicles',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllTickets = () => {
    return axiosConfig.get('tickets/findAllTickets',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllCells = () => {
    return axiosConfig.get('cells/findAllCells',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const saveCell = (data) => {
    return axiosConfig.post('/cells/saveCell',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const saveUser = (data) => {
    return axiosConfig.post('/users/save',data,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const payInvoice = (invoice) => {
    return axiosConfig.put(`/invoices/pay`,invoice,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllUsers = () => {
    return axiosConfig.get('/users/findAll',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getAllInvoices = () => {
    return axiosConfig.get('/invoices/findAll',{
        headers:{
            'Content-type': 'application/json'
        }
    });
}


const registerVehicleDeparture = (vehicleLicensePlate) => {
    return axiosConfig.put(`vehicles/registerDeparture/${vehicleLicensePlate}`,{
        headers:{
            'Content-type': 'application/json'
        }
    });
}



export {
    registerVehicleEntry, getAllVehicles, getAllTickets, registerVehicleDeparture, getAllCells, saveCell, getAllUsers, saveUser, getAllInvoices, payInvoice
}