import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';


function Calendar() {
    const data = [
        {
            Id: 1,
            Subject: 'Call Utkarsh and ask him for next round 😁',
            StartTime: new Date(),
            EndTime: new Date(),
            IsAllDay: false,
        },
    ];
    const eventSettings = { dataSource: data }
    console.log(eventSettings)
    // const event = {

    //     id: 1,

    //     title: "Meeting with John",

    //     start: "2023-04-26T10:30:00Z",

    //     end: "2023-04-26T11:30:00Z",

    //     category: "work"

    // }
    return (
        <ScheduleComponent
            eventSettings={eventSettings}
            currentView='Day'
        >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    )
}

export default Calendar