export const formatCurrency = function (num, n = 2) {
  if(!num) return 0; 
  const re = '\\d(?=(\\d{' + (0 || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  const result = num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  return result.replace('.00', '');
};

const unitEnds = '1 nghìn triệu tỷ'.split(' ');

const defaultNumberStr = ' hai ba bốn năm sáu bảy tám chín';

const unitDigits = ('1 một' + defaultNumberStr).split(' ');
const tensDigits = ('lẻ mười' + defaultNumberStr).split(' ');
const hundredsDigits = ('không một' + defaultNumberStr).split(' ');

const convertNumberHundreds = (number) => {
  if (number == '000') return '';
  const numStr = number + '';
  //Kiểm tra độ dài của số, 1.000.000 => 3 block
  switch (numStr.length) {
    case 0:
      return '';
    case 1: //hàng đơn vị
      return unitDigits[numStr];
    case 2: //hàng chục
      return convertNumberTens(numStr);
    case 3: //hàng trăm
      let tensDigit = '';
      if (numStr.slice(1, 3) != '00') {
        tensDigit = convertNumberTens(numStr.slice(1, 3));
      }
      const hundred = hundredsDigits[numStr[0]] + ' trăm';
      return hundred + ' ' + tensDigit;
  }
};

function convertNumberTens(number) {
  let unitDigit = unitDigits[number[1]];
  const tensDigit = tensDigits[number[0]];
  let append = '';

  // Nếu chữ số hàng đơn vị là 5
  if (number[0] > 0 && number[1] == 5) {
    unitDigit = 'lăm';
  }
  // Nếu số hàng chục lớn hơn 1
  if (number[0] > 1) {
    append = ' mươi';

    if (number[1] == 1) {
      unitDigit = ' mốt';
    }
  }
  return tensDigit + '' + append + ' ' + unitDigit;
}

export const formatCurrencyToText = (number) => {
  const numStr = parseInt(number) + '';
  let i = 0;
  const arr = [];
  let maxLength = numStr.length;
  const result = [];
  let resultStr = '';

  if (maxLength == 0 || numStr == 'NaN') {
    return '';
  }

  while (maxLength >= 0) {
    arr.push(numStr.substring(maxLength, Math.max(maxLength - 3, 0)));
    maxLength -= 3;
  }

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != '' && arr[i] != '000') {
      result.push(convertNumberHundreds(arr[i]));

      // Thêm đuôi của mỗi khối
      if (unitEnds[i]) {
        result.push(unitEnds[i]);
      }
    }
  }

  resultStr = result.join(' ');

  return resultStr.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
};
