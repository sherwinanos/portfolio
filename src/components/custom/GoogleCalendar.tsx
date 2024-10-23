const GoogleCalendar: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0JeO6bhLlC2O_scQ9bW_VJxXMGD7jeGshqMNJYzlBunifxbyyrZzagKUJ2qEQSaPnUFnLUg05t?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
