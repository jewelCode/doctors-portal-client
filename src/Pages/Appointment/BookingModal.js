import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';




const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            pattient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('https://blooming-woodland-50920.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You Already Have an appointment, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    < form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2" >
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        < select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select >
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        < input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        < input name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        < input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form >
                </div >
            </div >
        </div >
    );
};

export default BookingModal;