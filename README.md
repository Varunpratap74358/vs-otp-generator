# vs-otp-generator



A lightweight, zero-dependency JavaScript package to **generate secure OTPs** — numeric and alphanumeric — with just one line of code. Ideal for login verification, mobile/email authentication, and testing.

---

## 🚀 Features

✅ Generate **numeric OTPs** (only digits)  
✅ Generate **alphanumeric OTPs** (letters + digits)  
✅ Customizable OTP length  
✅ Modern **ES module** syntax  
✅ Small, fast & zero dependencies  

---


## 🚀 Installation

```bash
npm install vs-otp-generator
```

```bash
import { generateNumericOTP} from 'vs-otp-generator';
import { generateAlphaNumericOTP} from 'vs-otp-generator';
```

```bash
console.log(generateNumericOTP());

console.log(generateAlphaNumericOTP(8));


By default it genrate 6 digits of otp length but you can pass perametter acourding to your otp length

```
