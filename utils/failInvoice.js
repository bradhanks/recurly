const pkg = require('child_process');
const { failAllInvoice, FailOneInvoice } = require('./../app');
const { exec } = pkg;
let key = process.argv[2];

if(!key) {
    //assume they want to delete the file I included
    exec(`run-func ./dist/app.js failAllInvoice "./data/failInvoiceList.csv"`, cbb);
}else if(key.endsWith(".csv")){
//fail a csv file with invoices in it
    exec(`run-func ./dist/app.js failAllInvoice "${key}"`, cbbb);
}
else{
//fail one invoice
    exec(`run-func ./dist/app.js failOneInvoice "${key}"`, cbbbb);
}

function cbb(err, strout, sdtin){
    if(err) {
        console.log(err);
        return;
    }
    console.log("hi")
}

function cbbb(err, strout, sdtin){
    if(err) {
        console.log(err);
        return;
    }
    console.log("has .csv")
}

function cbbbb(err, strout, sdtin){
    if(err) {
        console.log(err);
        return;
    }

    console.log("just one")
}