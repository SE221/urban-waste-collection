import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import './calendar.css'
class Calendar extends React.Component {
  
  render() {
    return (
<div  >
      <FullCalendar className='fc-day'
      eventcolor="blue"
        height="400px"
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridWeek"
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next'
         
        }}
        events={[
          { title: 'event 1', date: '2022-11-10' },
          { title: 'event 2', date: '2022-11-11' }
        ]}
      />
</div>
)
};
}
export default Calendar;