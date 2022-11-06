import React from 'react'

export const TicketCard = (props) => {

const{ticket} = props;

  return (
    <div className="col" key={ticket._id}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ticket Details</h5>
        <hr />
        <p className="card-title">Assigned cell: {ticket.assignedCell}</p>
        <p className="card-title">Entry hour: {ticket.entryHour}</p>
        <p className="card-title">Departure hour: {ticket.departureHour}</p>
        <p className="card-title">Owner's name: {ticket.vehicle.ownerName}</p>
        <p className="card-title">Owner's lastname: {ticket.vehicle.ownerLastname}</p>
        <p className="card-title">Owner's DNI: {ticket.vehicle.ownerDni}</p>
        <p className="card-title">License plate: {ticket.vehicle.licensePlate}</p>
        <p className="card-title">Vehicle type: {ticket.vehicle.type}</p>
      </div>
    </div>
  </div>
  )
}
