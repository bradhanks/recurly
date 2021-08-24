const { exec } = require('child_process');
const { isBuffer } = require('util');
let key = process.argv[2];

if(!key) {
    //assume they want to delete the file I included
    exec(`node -e 'require("./app").failAllInvoice("./data/failInvoiceList.csv")'`, cb);
}else if(key.endsWith(".csv")){
//fail a csv file with invoices in it
    exec(`node -e 'require("./app").failAllInvoice("${key}")'`, cb);
}
else{
//fail one invoice
    exec(`node -e 'require("./app").failOneInvoice("${key}")'`, cb);
}

function cb(err, strout, sdtin){
    if(err) {
        console.log(err);
        return;
    }
}
