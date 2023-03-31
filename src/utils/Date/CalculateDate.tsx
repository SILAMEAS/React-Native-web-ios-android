import {convertUTCToLocalTime} from './ConvertDate';

export const days = (date_1: any, date_2: any) => {
  // console.log(date_1 + '/' + date_2);
  const d1 = convertUTCToLocalTime(date_1);
  const d2 = convertUTCToLocalTime(date_2);
  let difference = d1.getTime() - d2.getTime();
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const s = Math.floor((difference % (1000 * 60)) / 1000);

  return d + 'd :' + h + 'h : ' + m + 'mn :' + s + ' s';
  // return difference;
};
export const second = (date_1: any, date_2: any) => {
  // console.log(date_1 + '/' + date_2);
  const d1 = convertUTCToLocalTime(date_1);
  const d2 = convertUTCToLocalTime(date_2);
  let difference = d1.getTime() - d2.getTime();
  console.log(d1.getTime());
  console.log(d2.getTime());
  console.log(difference);

  const s = difference / 1000;

  return s;
  // return difference;
};
export const Tosecond = (date_1: any) => {
  // console.log(date_1 + '/' + date_2);
  const d1 = convertUTCToLocalTime(date_1);

  let difference = d1.getTime();

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const s =
    Math.floor((difference % (1000 * 60)) / 1000) +
    d * 86400 +
    h * 3600 +
    m * 60;
  console.log('convert ---');
  console.log(s);

  return s;
  // return difference;
};

export const SecondOfDay = (date_1: any, date_2: any) => {
  // console.log(date_1 + '/' + date_2);
  const d1 = convertUTCToLocalTime(date_1);
  const d2 = convertUTCToLocalTime(date_2);
  let difference = d1.getTime() - d2.getTime();
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const s =
    Math.floor((difference % (1000 * 60)) / 1000) +
    m * 60 +
    h * 3600 +
    d * 86400;

  return s * 1000;
  // return difference;
};
