import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export default function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek == 'Saturday' || dayOfWeek == 'Sunday';
}
const today = dayjs().add(2, 'days');
console.log(isWeekend(today))