require("dotenv").config();
const recurly = require("recurly");
const csv = require("csvtojson");

// CONNECT TO RECURLY ACCOUNT

const client = new recurly.Client(process.env.API_KEY);

function failAllInvoice(path = "./data/failInvoiceList.csv") {

  csv()
    .fromFile(path)
    .then((jsonObj) => {
      try {
        Object.keys(jsonObj).forEach(function (key) {
          failOneInvoice(jsonObj[key].invoice_id);
        });
      } catch (err) {
        if (err instanceof recurly.errors.ValidationError) {
          // If the request was not valid, you may want to tell your user
          // why. You can find the invalid params and reasons in err.params
          console.log("Failed validation", err.params);
        } else {
          // If we don't know what to do with the err, we should
          // probably re-raise and let our web framework and logger handle it
          console.log("Unknown Error: ", err);
        }
      }
    });
}

const failOneInvoice = async (id) => {
  try {
    const invoice = await client.markInvoiceFailed(id);
    console.log("Invoice #" + invoice.number + "successfully failed: ");
  } catch (err) {
    if (err instanceof recurly.errors.ValidationError) {
      // If the request was not valid, you may want to tell your user
      // why. You can find the invalid params and reasons in err.params
      console.log("Failed validation", err.params);
    } else {
      // If we don't know what to do with the err, we should
      // probably re-raise and let our web framework and logger handle it
      console.log("Unknown Error: ", err);
    }
  }

  console.log(id);
};

module.exports = {
  failAllInvoice,
  failOneInvoice,
};
