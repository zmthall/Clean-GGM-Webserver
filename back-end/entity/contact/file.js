import { EntityError } from "./entityError.js";
import { Buffer } from 'node:buffer';

export class File {
    constructor({fieldname, originalname, encoding, mimetype, buffer, size}, maxSize = null, acceptedFileType = null) {
        if(this.isString(fieldname)) this.fieldname = fieldname;
        if(this.isString(originalname)) {
            this.originalname = originalname;
            this.fileExtension = this.getFileExtension(originalname);
        } 
        if(this.isString(encoding)) this.encoding = encoding;
        if(this.isString(mimetype)) this.mimetype = mimetype;
        if(this.validateBuffer(buffer)) this.buffer = buffer;
        if(this.validateSize(size)) this.size = size;
    }

    getFileExtension(filename) {
            const nameParts = filename.split('.');
            return nameParts[nameParts.length - 1];
    }

    isString(string, name = null) {
        if(!(typeof name === 'string' || name === null))
            throw new EntityError('To notate isString, name needs to be of type string.');

        if(!(typeof string === 'string'))
            throw new EntityError(`string[${name || ''}] needs to be of type string.`);

        return true;
    }

    validateBuffer(buffer) {
        if(!(Buffer.isBuffer(buffer)))
            throw new EntityError('Buffer needs to be of type buffer.');

        return true;
    }

    validateSize(size, maxSize = null) {
        if(!(typeof size === 'number' && size > 0)) 
            throw new EntityError('Size needs to be of type and cannot be empty or undefined.');

        if(maxSize)
            if(!(size < maxSize))
                throw new EntityError(`File size is too large. Maxsize is: ${maxSize}`);

        return true;
    }
}