import stream from "stream";
'use strict';
const { Transform } = stream;
class ByteaEncoder extends Transform {
    constructor() {
        super();
        this.push('\\\\x');
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString('hex'));
        callback();
    }
}
export default ByteaEncoder;
