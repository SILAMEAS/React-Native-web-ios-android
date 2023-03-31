export const getFileTypeFromBase64 = (base64: string): string => {
  const fileHeader = new Map();

  //get the first 3 char of base64
  fileHeader.set('/9j', 'image/jpg');
  fileHeader.set('iVB', 'image/png');
  fileHeader.set('Qk0', 'image/bmp');
  fileHeader.set('JVB', 'application/pdf');

  let res = '';

  const baseString = base64.substring(0, 3);

  fileHeader.forEach((v, k) => {
    if (k === baseString) {
      res = v;
    }
  });

  if (res === '') {
    res = 'unknown file';
  }
  return res;
};
