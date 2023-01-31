import dotenv from "dotenv";
dotenv.config();

const paystack = (request) => {
  const headers = {
    authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
    "content-type": "application/json",
    "cache-control": "no-cache",
  };

  const initializePayment = (form, mycallback) => {
    const options = {
      url: `https://api.paystack.co/transaction/initialize`,
      headers,
      form,
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request.post(options, callback);
  };

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url: `https://api.paystack.co/transaction/verify/transaction/verify/${encodeURIComponent(ref)}`,
      headers,
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request(options, callback);
  };

  return { initializePayment, verifyPayment };
};

export default paystack;