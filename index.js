

//  Only numbers
export function generateNumericOTP(length = 6) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return otp;
}

//  Letters + numbers
export function generateAlphaNumericOTP(length = 6) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let otp = ''
  for(let i=0;i<length;i++){
    otp += chars.charAt(Math.floor(Math.random()* chars.length));
  }
  return otp;
}
