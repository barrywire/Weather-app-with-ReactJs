/* eslint-disable no-const-assign */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
const getDateFromEpoch = (epoch) => {
  const date = new Date(Math.round(Number(epoch) * 1000));
  return date;
};
const getDateStringFromEpoch = (epoch) => {
  const date = getDatefromEpoch(epoch);
  const aMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  const sMonth = aMonths[date.getUTCMonth()];

  return `${date.getUTCDate()}/${sMonth}/${date.getUTCFullYear()}`;
};
const getDayStringFromEpoch = (epoch, type = 'long') => {
  const sDay = '';
  const date = getDateFromEpoch(epoch);
  const oDays = {
    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    medium: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    short: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  };
  const nDay = date.getDay();
  if (type === 'short' || type === 'medium') {
    sDay = oDays[type][nDay];
  } else {
    sDay = oDays.long[nDay];
  }
  return sDay;
};
const isObjectEmpty = (o) => {
  const isEmpty = Object.keys(o).length === 0 && o.constructor === Object;
  return isEmpty;
};
const objectHasProperty = (o, p) => {
  let hasProperty = false;
  if (Object.prototype.hasOwnProperty.call(o, p)) {
    hasProperty = true;
  }
  return hasProperty;
};
export {
  getDateStringFromEpoch, getDayStringFromEpoch, isObjectEmpty, objectHasProperty,
};
