const fs = require('fs');

function createLoggingWritable(writableOrig) {
    const proto = Object.getPrototypeOf(writableOrig);

    function LoggingWritable(writableOrig) {
        this.writableOrig = writableOrig;
    }

    /* prototype 속성도 하나의 객체이며 프로토타입 체인을 통해 상속하고자 하는 속성과 메소드를 담아두는 버킷으로 주로 사용되는 객체입니다. */
    LoggingWritable.prototype = Object.create(proto);

    LoggingWritable.prototype.write = function(chunk, encoding, callback){
        if(!callback && typeof encoding === 'function') {
            callback = encoding;
            encoding = undefined;
        }
        console.log('Writing', chunk);

        return this.writableOrig.write(chunk, encoding, function(){
            console.log('Finished writing', chunk);
            callback && callback();
        })
    }

    LoggingWritable.prototype.on = function() {
        return this.writableOrig.on
                   .apply(this.writableOrig, arguments);
    }

    LoggingWritable.prototype.end = function(){
        return this.writableOrig.end
                   .apply(this.writableOrig, arguments);
    }

    return new LoggingWritable(writableOrig);
}

const writable = fs.createWriteStream('test.txt');
const writableProxy = createLoggingWritable(writable);
writableProxy.write('First chunk');
writableProxy.write('Second chunk');
writable.write('This is not logged');

writableProxy.end();