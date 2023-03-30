import moment, { MomentInput } from 'moment';

export const DateFormat = {
  dateUIFormat: 'DD/MM/YYYY',
  monthUIFormat: 'MMM YYYY',
  monthUIFormatNumber: 'MM/YYYY',
  dateTimeUIFormat: 'DD/MM/YYYY HH:mm',
  serverDateFormat: 'YYYY-MM-DD',
  yearUI: 'YYYY',
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 12/03/2021
 */
export const formatServerDateToUIDateFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.dateUIFormat);
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: March 2021
 */
export const formatServerDateToUIMonthFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.monthUIFormat);
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 03th March 2021
 */
export const formatServerDateToUIDayOrdinal = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  const date = new Date(serverDate);
  return `${date.getDate()}th ${formatServerDateToUIMonthFormat(serverDate)}`;
};

/*
serverDate must be ISO format, ex: 2021-03-12
return to view date format, ex: 12/03/2021 8:00
 */
export const formatServerDateToUIDateTimeFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.dateTimeUIFormat);
};

export const formatServerDateToMonthUIFormat = (serverDate?: string) => {
  if (!serverDate) {
    return '';
  }
  return moment(serverDate).format(DateFormat.monthUIFormat);
};

export const getMonth = (value?: string) => {
  if (!value) {
    return 0;
  }

  return moment(value).month();
};

export const getYear = (value?: string) => {
  if (!value) {
    return 0;
  }

  return moment(value).year();
};

export const getDaysArray = (year: number, month: number) => {
  const monthIndex = month; // 0..11 instead of 1..12
  const names = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const date = new Date(year, monthIndex, 1);
  const result = [];

  while (date.getMonth() === monthIndex) {
    result.push({
      day: date.getDate(),
      name: names[date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const getAvailableTime = (from: MomentInput, to: MomentInput, minuteOffset?: number, disable = false): any[] => {
  const start = moment(from, 'hh:mm');
  const end = moment(to, 'hh:mm');
  start.minutes(Math.ceil(start.minutes() / 15) * 15);
  const result: Array<any> = [];
  const current = moment(start);
  while (current <= end) {
    result.push({ time: current.format('HH:mm'), disable: disable });
    current.add(minuteOffset !== undefined ? minuteOffset : 15, 'minutes');
  }
  return result;
};

//, format = 'mm/dd/yyyy'
export const formatDateTime = (dateTime: Date): string => {
  //remove Z
  if (dateTime != undefined && typeof dateTime.getDate === 'function') {
    const date = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const dateStr = date < 10 ? '0' + date : date;
    const monthStr = month < 10 ? '0' + month : month;

    const minute = dateTime.getMinutes();
    const hours = dateTime.getHours();
    const minutes: number = minute % 60;

    const hourStr = hours < 10 ? '0' + hours.toString() : hours.toString();
    const minuteStr = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const strTime = hourStr + ':' + minuteStr + ':00';

    const year = dateTime.getFullYear() + '';
    return (year.length < 4 ? year.padStart(4, '0') : year) + '-' + monthStr + '-' + dateStr + 'T' + strTime;
  }
  return null;
};

export const replaceDateToStringBeforeParseJson = (payload: any, isClone = true) => {
  const body = isClone
    ? JSON.parse(JSON.stringify(payload))
    : payload;
  if (body != null) {
    if (toString.call(body) == '[object Object]') {
      Object.keys(body).map((key) => {
        if (toString.call(body[key]) == '[object Object]') {
          replaceDateToStringBeforeParseJson(body[key], false);
        } else if (toString.call(body[key]) == '[object Array]') {
          for (const item of body[key]) {
            replaceDateToStringBeforeParseJson(item, false);
          }
          replaceDateToStringBeforeParseJson(body[key], false);
        } else if (
          toString.call(body[key]) == '[object Date]' || 
          (toString.call(body[key]) == '[object String]' && body[key]?.toString()?.trim()?.length >= 10 && moment(body[key], moment.ISO_8601, true).isValid()) //min length mm-dd-yyyy
        ) {
          body[key] = formatDateTime(new Date(body[key]));
        }
      });
    } else if (toString.call(body) == '[object Array]') {
      for (const item of body) {
        replaceDateToStringBeforeParseJson(item, false);
      }
    }
  }
  return body;
};
