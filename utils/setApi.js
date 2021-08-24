const { exec } = require('child_process');
const { isBuffer } = require('util');
let key = process.argv[2];

exec(`dotenv set API_KEY "${key}"`, cb);

function cb(err, strout, sdtin){
    if(err) {
        console.log(err);
        return;
    }
}
