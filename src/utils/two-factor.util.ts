export const otpVerification = (phone: string) => {
  let apiKey = process.env.TWO_FACTOR_API || "";
  const userPhone = phone.trim();
  const smsTemplate = process.env.SMS_TEMPLATE;
  const senderId = process.env.SENDER_ID;

  if (apiKey === "") {
    throw new Error("Missing 2Factor api key in environment");
  }

  const TwoFactor = new (require("2factor"))(apiKey);

  // get your two factor balance
  TwoFactor.balance().then(
    (response: any) => {
      console.log(response);
    },
    (error: any) => {
      console.log(error);
    }
  );

  let sessionReturned;
  let otpEntered;

  // to send transactional sms
  TwoFactor.sendTransactional(userPhone, smsTemplate, senderId).then(
    (sessionId: any, otp: any) => {
      console.log(sessionId);
      sessionReturned = sessionId;
      otpEntered = otp
      alert("enter opt");
    },
    (error: any) => {
      console.log(error);
    }
  );

  // to verify an otp sms
  TwoFactor.verifyOTP(sessionReturned, otpEntered).then(
    (response: any) => {
      console.log(response);
    },
    (error: any) => {
      console.log(error);
    }
  );

  return true;
};
