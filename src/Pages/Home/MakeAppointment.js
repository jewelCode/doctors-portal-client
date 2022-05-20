import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center mt-[50px]">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-primary">Appointment</h3>
                <h2 className="text-3xl text-white">Make and Appoinment</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis accusamus numquam laborum corrupti dolores quod! Numquam distinctio nulla dolores consequuntur dolorem, corporis molestias deserunt beatae mollitia, aliquam eum doloremque ipsa ex omnis vero ab! Quasi iste voluptate veritatis illum!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;