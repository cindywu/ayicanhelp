import Header from './header'
export default function VolunteersCalendar() {
  return (
    <div className={"max-w-md p-4"}>
      <Header/>
      <CalendarComponent/>
    </div>
  )
}

// TODO: find library for embedding google calendar
function CalendarComponent() {
  return (
    <div className={"text-4xl"}>
      <div>Volunteers Calendar</div>
      <div className={"w-80 bg-blue-100 h-20"}>
      </div>
    </div>
  )
}