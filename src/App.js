import React, { useState } from 'react';
import convertStringDateToDateObject from './utils/convertStringDateToDateObject';
//REACT-BIG-CALENDAR
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//DATE-FNS
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';


const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 2, 11),
        end: new Date(2022, 2, 12)
    },
    {
        title: "Vacation",
        start: new Date(2022, 2, 12),
        end: new Date(2022, 2, 13)
    },
    {
        title: "Conference",
        start: new Date(2022, 2, 9),
        end: new Date(2022, 2, 10)
    }
];


function App() {
    const [ allEvents, setAllEvents ] = useState(events);


    const handleEvent = ({ start, end }) => {
        setAllEvents(prev => [
            ...prev,
            {
                title: prompt("Event's name: "),
                start: convertStringDateToDateObject(start),
                end  : convertStringDateToDateObject(end)
            }
        ])
    }


    return (
        <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.MONTH}
            views={['month', 'day', 'work_week']}
            style={{ height: 500, margin: "50px" }}
            selectable={true}
            onSelectEvent={e => {}}
            onSelectSlot={e => {
                handleEvent({ start: e.start.toString(), end: e.end.toString() });
            }}
        />
    )
}

export default App;