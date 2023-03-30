import { V_DayOfWeekEnum } from '@core/models/enums/dayOfWeekEnum';
import { DetectInputKSKEnum, DetectInputRegexEnum } from '@core/models/enums/emrEnum';

export const isNumberAndFractionRegex = /^(?:\d*\.?\d+|\d+\.)(?:\/\d*\.?\d+|\d+\.)*$/;

const hasNumberRegex = /\d/;

// Them QL 2021
const HICARD_CODE =
  /(^(CC|TE|CK|CB|KC|HN|DT|DK|XD|BT|TS|HT|TC|CN|DN|HX|CH|NN|TK|HC|XK|TB|NO|CT|XB|TN|CS|XN|MS|HD|TQ|TA|TY|HG|LS|HS|SV|GB|GD|QN|CA|CY)\d{13}$)|^\d{10}$/;
//const HICARD_REG_EXP = "^(((?'doituong'CC|TE|CK|CA|BT|HN|HT|CN|DN|HX|CH|NN|TK|HC|XK|TB|MS|XB|XN|TN|CB|KC|HD|TC|TQ|TA|TY|HG|LS
//|HS|GD|TL|XV|NO|SV|DK|CT|QN|CS|CY|XD|DT|TS|PV|GB|HK|ND|)(?'quyenloi'[1-7])))(?'tinhthanh'\d{2})(?'quanhuyen'\d{2})(?'donvi'\d{3})(?'sothutu'\d{5})$";

//\const HICARD_REG_EXP =
// /^(?!CC|TE|CK|CA|BT|HN|HT|CN|DN|HX|CH|NN|TK|HC|XK|TB|MS|XB|XN|TN|CB|KC|HD|TC|TQ|TA|TY|HG|LS|HS|GD|TL|XV|NO|SV|DK|CT|QN|CS|CY|XD|DT|TS|PV|GB|HK|ND)[1-7]{1}[1-9]{2}[1-9]{2}$/;
const PMF_CODE = /^\d{6,8}$/;
const PCL_CODE = /^(PH|PL|QH|QL)[0-9]/;
const PT_CODE = /^KB|NV/;
const ISSUE_CODE = /^TT/;
const QMS_CODE = /^(qms)/;
const ID_NUMBER = /^\d{12}/;
const OUTWARD_CODE = /^\d{2}NT/;
const OUT_INTERNAL_CODE = /^\d{2}NB/;

export const hasNumber = (text: string) => {
  return hasNumberRegex.test(text);
};

export const isNullOrEmpty = (str) => {
  return !(!str || /^\s*$/.test(str));
};

export const isNumber = (num) => {
  return !isNaN(parseInt(num));
};

export const parseNumber = (num) => {
  return !isNaN(parseInt(num)) ? parseInt(num) : 0;
};

export const parseDecimal = (num, digit = 1) => {
  return !isNaN(parseFloat(num)) ? parseFloat(parseFloat(num).toFixed(digit)) : 0;
};

export const Deta = (str) => {
  return !(!str || /^\s*$/.test(str));
};

export const detectInputString = (str) => {
  const regHI = new RegExp(HICARD_CODE);
  const regPMF = new RegExp(PMF_CODE);
  const regPCL = new RegExp(PCL_CODE);
  const regPtCode = new RegExp(PT_CODE);
  const regIssueCode = new RegExp(ISSUE_CODE);
  const regQMSCode = new RegExp(QMS_CODE);
  const regIdNumber = new RegExp(ID_NUMBER);
  const regOutwardCode = new RegExp(OUTWARD_CODE);
  const regOutInternalCode = new RegExp(OUT_INTERNAL_CODE);

  if (str === '') {
    return DetectInputRegexEnum.Empty;
  }

  if (regPMF.test(str)) {
    return DetectInputRegexEnum.PMF;
  } else if (regPCL.test(str)) {
    return DetectInputRegexEnum.PCL;
  } else if (regPtCode.test(str)) {
    return DetectInputRegexEnum.PtCode;
  } else if (regIssueCode.test(str)) {
    return DetectInputRegexEnum.IssueCode;
  } else if (regQMSCode.test(str)) {
    return DetectInputRegexEnum.QMSCode;
  } else if (regOutwardCode.test(str)) {
    return DetectInputRegexEnum.OutwardCode;
  } else if (regHI.test(str)) {
    return DetectInputRegexEnum.HiCardNo;
  } else if (regIdNumber.test(str)) {
    return DetectInputRegexEnum.IdNumber;
  } else if (regOutInternalCode.test(str)) {
    return DetectInputRegexEnum.OutInternal;
  } else if (hasNumberRegex.test(str)) {
    return DetectInputRegexEnum.HasNumber;
  } else {
    return DetectInputRegexEnum.FullName;
  }
};
//
// export const getBase64FromUrl = async (url) => {
//   const data = await fetch(url, {
//     mode: 'no-cors'
//   });
//   const blob = await data.blob();
//   return new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onloadend = () => {
//       const base64data = reader.result;
//       resolve(base64data);
//     };
//   });
// };

export const getBase64FromUrl = async (url) => {
  const baseImage = new Image();
  baseImage.src = url;

  baseImage.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = baseImage.width;
    canvas.height = baseImage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    console.log(baseImage, ctx);
    const dataURL = ctx.canvas.toDataURL('image/png');
    return dataURL;
  };
};

const VietNamCharArray = [
  'aAeEoOuUiIdDyY',
  'áàạảãâấầậẩẫăắằặẳẵ',
  'ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ',
  'éèẹẻẽêếềệểễ',
  'ÉÈẸẺẼÊẾỀỆỂỄ',
  'óòọỏõôốồộổỗơớờợởỡ',
  'ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ',
  'úùụủũưứừựửữ',
  'ÚÙỤỦŨƯỨỪỰỬỮ',
  'íìịỉĩ',
  'ÍÌỊỈĨ',
  'đ',
  'Đ',
  'ýỳỵỷỹ',
  'ÝỲỴỶỸ',
];

export const removeVietnameseStringAndLowerCase = (aInputString: string) => {
  if (aInputString === null || aInputString.length === 0 || aInputString === 'undefined') {
    return '';
  }
  for (let i = 1; i < VietNamCharArray.length; i++) {
    for (let j = 0; j < VietNamCharArray[i].length; j++) {
      aInputString = aInputString.replace(VietNamCharArray[i][j], VietNamCharArray[0][i - 1]);
    }
  }
  return aInputString.toLowerCase();
};

export const groupAndMerge = (arr, groupBy) => {
  return arr
    .reduce((res, currentValue) => {
      if (res.indexOf(currentValue[groupBy]) === -1) {
        res.push(currentValue[groupBy]);
      }
      return res;
    }, [])
    .map((group) => {
      return {
        key: group,
        groupName: groupBy,
        rows: arr.filter((_el) => _el[groupBy] === group).map((_el) => _el),
      };
    });
};

export const updateArrayWithNewAndExistItem = (array: any[], updateItems: any[], key: string | number) => {
  let newItems = [...(updateItems ?? [])];
  const updatedArray = array.reduce((arr, item) => {
    const updateItem = updateItems.find((r) => r[key] === item[key]);
    if (updateItem) {
      arr.push({ ...item, ...updateItem });
      newItems = newItems.filter((i) => i[key] !== updateItem[key]);
    } else {
      arr.push(item);
    }
    return arr;
  }, []);

  return {
    updatedArray,
    newItems,
    updateArrayWithNewItem: newItems.concat(updatedArray),
  };
};

export const getIframeHtml = (iframe: any) => {
  const s = new XMLSerializer();
  let html = '';
  let e = iframe.contentDocument.firstChild;
  do {
    html += 'outerHTML' in e ? e.outerHTML : s.serializeToString(e);
    e = e.nextSibling;
  } while (e);
  return html;
};

export const parseFraction = (num) => {
  try {
    return eval(num);
  } catch {
    return 0;
  }
};

export const xml2json = (xml) => {
  try {
    const json = {};
    for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
      const key = res[1] || res[3];
      const value = res[2] && xml2json(res[2]);
      json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
    }
    return toCamel(json);
  } catch (e) {
    console.log(e.message);
  }
};

const toCamel = (o) => {
  let newO, origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === 'object') {
        value = toCamel(value);
      }
      return value;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
        value = o[origKey];
        if (value instanceof Array || (value !== null && value.constructor === Object)) {
          value = toCamel(value);
        }
        newO[newKey] = value;
      }
    }
  }
  return newO;
};

export const createLookupOptions = (param, description: Map<number, string>) => {
  const keys = Object.keys(param).filter((key) => key && !isNumber(key));

  const result = keys.map((key) => {
    return {
      id: param[key],
      name: description.get(param[key]),
    };
  });

  return result;
};

export const getDayOfWeekId = (day: number) => {
  switch (day) {
    case 0:
      return V_DayOfWeekEnum.SUNDAY;
    case 1:
      return V_DayOfWeekEnum.MONDAY;
    case 2:
      return V_DayOfWeekEnum.TUESDAY;
    case 3:
      return V_DayOfWeekEnum.WEDNESDAY;
    case 4:
      return V_DayOfWeekEnum.THURSDAY;
    case 5:
      return V_DayOfWeekEnum.FRIDAY;
    case 6:
      return V_DayOfWeekEnum.SATURDAY;
    default:
      return V_DayOfWeekEnum.MONDAY;
  }
};

export const dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{2,4}$/;
export const genderRegex = /^nam$|^nữ$|^f$|^m$/i;
export const phoneNumber = /^\d{9,11}$/i;
export const fullNameRegex = /^\D+$/i;

export const detectInputXLMKSKColumn = (data) => {
  const keys = Object.keys(data);
  const dict = keys?.reduce((arr, i) => {
    if (!arr[DetectInputKSKEnum.DOB] && dateRegex.test(data[i])) {
      arr[DetectInputKSKEnum.DOB] = i;
    } else if (!arr[DetectInputKSKEnum.GENDER] && genderRegex.test(data[i])) {
      arr[DetectInputKSKEnum.GENDER] = i;
    } else if (!arr[DetectInputKSKEnum.PHONENUMBER] && phoneNumber.test(data[i])) {
      arr[DetectInputKSKEnum.PHONENUMBER] = i;
    } else if (!arr[DetectInputKSKEnum.FULLNAME] && fullNameRegex.test(data[i])) {
      arr[DetectInputKSKEnum.FULLNAME] = i;
    } else if (!arr[DetectInputKSKEnum.GROUP] && /^\d+$/.test(data[i])) {
      arr[DetectInputKSKEnum.GROUP] = i;
    } else if (!arr[DetectInputKSKEnum.ADDRESS]) arr[DetectInputKSKEnum.ADDRESS] = i;
    return arr;
  }, {});

  return dict;
};

/**
 * 
 * @param arrays 
 * @param key : property cần sum
 * @returns 
 */
export const sumTotal = (arrays, key: 'invoicePrice' | 'totalInvoicePrice' | 'totalPatientPayment' | 'totalHIPayment' | 'totalPrice' | 'remaining') => {
  if (!arrays || arrays.length == 0) return 0;
  return arrays.reduce((sum, item) => sum + item[key], 0);
};
