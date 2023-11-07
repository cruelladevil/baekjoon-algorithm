const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [hour, minute] = input;

const HOUR = 60;
const DAY = 24 * HOUR;
const ALARM_MINUTE = 45;

const convertMinuteToHourMinute = (minute) => {
  return { hour: Math.floor(minute / HOUR), minute: minute % HOUR };
};

const genAlarmTime = (hour, minute) => {
  const currentMinute = hour * HOUR + minute;
  const alarmMinute = currentMinute - ALARM_MINUTE;

  return alarmMinute >= 0 ? convertMinuteToHourMinute(alarmMinute) : convertMinuteToHourMinute(DAY + alarmMinute);
};

const { hour: alarmHour, minute: alarmMinute } = genAlarmTime(hour, minute);

console.log(`${alarmHour} ${alarmMinute}`);
