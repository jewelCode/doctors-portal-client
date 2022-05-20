import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'


const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://blooming-woodland-50920.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <p>Loading...</p>
    }

    // useEffect(() =>{
    //     fetch(`https://blooming-woodland-50920.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div>
            <h4 className="text-xl text-secondary text-center"> Available Appointments on {format(date, "PP")}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <AppointmentService service={service} key={service._id} setTreatment={setTreatment}></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal
                date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;