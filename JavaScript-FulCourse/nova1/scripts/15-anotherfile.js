import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from "./15-elMVC.js";

const today = dayjs().add(2, 'days');
console.log(isSatSun(today))