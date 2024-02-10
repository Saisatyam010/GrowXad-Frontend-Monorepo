import React, { useState } from 'react'
import "./SlotBookingChart.css"

export const SlotBookingChart = () => {
    const [selectedHours, setSelectedHours] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    });

    const handleHourClick = (day, hour) => {
        let updatedHours = { ...selectedHours };

        // If the user clicks on the day name, select all hours for that day
        if (hour === 'all') {
            updatedHours[day] = selectedHours[day].length === 24 ? [] : [...Array(24).keys()];
        } else {
            const isSelected = selectedHours[day].includes(hour);

            if (isSelected) {
                updatedHours[day] = selectedHours[day].filter(selectedHour => selectedHour !== hour);
            } else {
                updatedHours[day] = [...selectedHours[day], hour];
            }
        }

        setSelectedHours(updatedHours);
    };

    const handleAllHoursClick = (hour) => {
        const allDays = Object.keys(selectedHours);
        const updatedHours = {};

        if (hour === 'all') {
            // Toggle all hours for all days
            const isAnyHourSelected = allDays.some(day => selectedHours[day].length > 0);

            allDays.forEach(day => {
                updatedHours[day] = isAnyHourSelected ? [] : [...Array(24).keys()];
            });
        } else {
            // Toggle all hours for the selected hour across all days
            const isHourSelected = allDays.some(day => selectedHours[day].includes(hour));

            allDays.forEach(day => {
                updatedHours[day] = isHourSelected ? selectedHours[day].filter(selectedHour => selectedHour !== hour) : [...selectedHours[day], hour];
            });
        }

        setSelectedHours(updatedHours);
    };
    return (
        <div className='container-fluid ' style={{ fontSize: "16px", fontWeight: "600" }}>
            <table className='table border'>
                <thead>
                    <tr>
                        <th onClick={() => handleAllHoursClick('all')} className='dp_table_th'>All Hours</th>
                        {[...Array(24).keys()].map(hour => (
                            <th key={hour} onClick={() => handleAllHoursClick(hour)} className='text-center dp_table_th' style={{ cursor: "pointer" }}>{hour}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(selectedHours).map(day => (
                        <tr key={day} >
                            <td onClick={() => handleHourClick(day, 'all')} style={{ cursor: "pointer" }} className='dp_table_td'>{day}</td>
                            {[...Array(24).keys()].map(hour => (
                                <td key={hour} className='dp_table_td'>
                                    <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        checked={selectedHours[day].includes(hour)}
                                        onChange={() => handleHourClick(day, hour)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
