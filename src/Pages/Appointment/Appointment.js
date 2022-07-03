import React from 'react';
import Appointmentavailable from '../Appointmentavailable/Appointmentavailable';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
        <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
        <Appointmentavailable date={date}></Appointmentavailable>
        </>
    );
};

export default Appointment;