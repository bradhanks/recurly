const csv = require('csvtojson');

function readCSV(){
    let entries = [];
    let count = 0;

    csv({delimiter:';'})
    .fromFile('./shakespeare_plays_sample.csv')
    .then((json)=>{
        json.forEach((row)=>
        {
            count++;
            entries.push(row);
            if(count % 100 == 0){
                processEntries(entries);
                count = 0;
                entries = []; // clear the array
            }
        });
        processEntries(entries);
    })
    return entries;
}

function processEntries(entries){
    console.log(entries[0].Id + "  to " + entries[entries.length - 1].Id);
}

module.exports = readCSV;