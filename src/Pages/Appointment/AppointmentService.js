import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            < div className = "card-body">
                < h2 className = "card-title text-secondary">{name}</h2>
                    <p>
                {
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">  No slot Available</span>
                }
            </p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}   available Space</p>
            <div className="card-actions justify-center">
            </div >
    <label onClick={() => setTreatment(service)}
        disabled={slots.length === 0} for="booking-modal" className="btn btn-secondary text-white uppercase">{slots.length > 1 ? 'Book Appointment' : 'No Appointment Avaialbe'}</label>
        </div >
        </div >
    );
};

export default AppointmentService;