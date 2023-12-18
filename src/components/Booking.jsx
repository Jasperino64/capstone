import React, { useReducer, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../utils/utils';

export async function initializeTimes(date) {
    const times = await fetchAPI(date);
    return times;
};

export function updateTimes(state, action) {
    switch (action.type) {
        case "SET_TIMES":
            return action.data;
        default:
            return state;
    }
};


export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    const handleDateChange = async (date) => {
        const times = await fetchAPI(date);
        dispatch({ type: 'SET_TIMES', data: times });
    };


    const navigate = useNavigate();

    useEffect(() => {
        const fetchTimes = async () => {
            initializeTimes(new Date()).then((times) => {
                dispatch({ type: 'SET_TIMES', data: times });
            });
        };
        fetchTimes();
    }, []);

    const submitFormData = (data) => {
        if (submitAPI(data)) {
            navigate("/success");
        }
    }

    return (
        <BookingForm role="booking-form" submitFormData={submitFormData} availableTimes={availableTimes} onDateChange={handleDateChange} />
    )
}