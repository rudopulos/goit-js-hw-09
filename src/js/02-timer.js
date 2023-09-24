
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');


function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}


function displayTimer(days, hours, minutes, seconds) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}


function calculateTimeDifference(endDate) {
  const currentTime = new Date().getTime();
  return endDate - currentTime;
}


function startTimer(endDate) {
  const intervalId = setInterval(() => {
    const timeDifference = calculateTimeDifference(endDate);

    if (timeDifference <= 0) {
      clearInterval(intervalId);
      displayTimer(0, 0, 0, 0);
      startButton.disabled = false;
    } else {
      const time = convertMs(timeDifference);
      displayTimer(time.days, time.hours, time.minutes, time.seconds);
    }
  }, 1000);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("Please choose a date in the future.");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      const endDate = selectedDate.getTime();
      startTimer(endDate);
    }
  },
});


startButton.addEventListener('click', () => {
  const selectedDate = new Date(datetimePicker.value).getTime();
  startTimer(selectedDate);
  startButton.disabled = true;
});
