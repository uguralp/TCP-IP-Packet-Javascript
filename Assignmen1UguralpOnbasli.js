var number = "0x1040 1E76 00000000 00000000 50220000";

var replaced = number.split(' ').join('');
console.log(number);
number = parseInt(number) << 32;

var sourcePort = number >> (3*4*8);
var target_port = "0x1040 1E76 00000000 00000000 50220000".slice(7,11);
target_port = parseInt(target_port,16);

var flags = number & 0xFFFFFFFF;
var data_offset = (flags & 0xF0000000) >> 28;
var ns = (flags & 0x0F000000) >> 24;
var f = (flags & 0x00FF0000) >> 16;

var ece = (f & 0x40) >> 6;
var cwr = (f & 0x80) >> 7,
ece = (f & 0x40) >> 6,
urg = (f & 0x20) >> 5,
ack = (f & 0x10) >> 4,
psh = (f & 0x08) >> 3,
rst = (f & 0x04) >> 2,
syn = (f & 0x02) >> 1,
fin = (f & 0x01);


console.log(sourcePort);
console.log(target_port);

ns = require('fs');
ns.writeFile('data.txt',replaced.toString(), function (err) {
    if (err) 
        return console.log(err);
    console.log('data.txt file created. Check your directory.');
});

fs = require('fs');
fs.writeFile('sn.txt',target_port.toString() + "" + sourcePort.toString(), function (err) {
    if (err) 
        return console.log(err);
    console.log('sn.txt file created. Check your directory.');
});