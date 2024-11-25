import { EntityError } from "../../utility/error-handling/EntityError.js";
import { emailValidation } from "../../utility/validation/entityValidation.js";

// class Attachments {
//     constructor(filename, content, path, href, headers, httpHeaders, contentType) {
        
//     }
// }
// EXAMPLE OF USING ATTACHMENTS:
// let message = {
//     ...
//     attachments: [
//         {   // utf-8 string as an attachment
//             filename: 'text1.txt',
//             content: 'hello world!'
//         },
//         {   // binary buffer as an attachment
//             filename: 'text2.txt',
//             content: new Buffer('hello world!','utf-8')
//         },
//         {   // file on disk as an attachment
//             filename: 'text3.txt',
//             path: '/path/to/file.txt' // stream this file
//         },
//         {   // filename and content type is derived from path
//             path: '/path/to/file.txt'
//         },
//         {   // stream as an attachment
//             filename: 'text4.txt',
//             content: fs.createReadStream('file.txt')
//         },
//         {   // define custom content type for the attachment
//             filename: 'text.bin',
//             content: 'hello world!',
//             contentType: 'text/plain'
//         },
//         {   // use URL as an attachment
//             filename: 'license.txt',
//             path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
//         },
//         {   // encoded string as an attachment
//             filename: 'text1.txt',
//             content: 'aGVsbG8gd29ybGQh',
//             encoding: 'base64'
//         },
//         {   // data uri as an attachment
//             path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
//         },
//         {
//             // use pregenerated MIME node
//             raw: 'Content-Type: text/plain\r\n' +
//                  'Content-Disposition: attachment;\r\n' +
//                  '\r\n' +
//                  'Hello world!'
//         }
//     ]
// }

export class Email {
    constructor({from, to, cc = null, bcc = null, subject, text, html = null, attachments = null}) {
        const splitFrom = from.split(/<|>/)
        if(splitFrom.length > 1) {
            if(emailValidation(splitFrom[1])) this.from = from;
        } else {
            if(emailValidation(from)) this.from = from;
        }
        if(this.validateTo(to)) this.to = to;
        if(cc && this.validateCC(cc)) this.cc = cc;
        if(bcc && this.validateBCC(bcc)) this.bcc = bcc;
        if(this.validateSubject(subject)) this.subject = subject;
        if(this.validateText(text)) this.text = text;
        if(html && this.validateHTML(html)) this.html = html;
        if(attachments && this.validateAttachments(attachments)) this.attachments = attachments;

        Object.freeze(this);
    }

    validateTo(to) {
        if(!(Array.isArray(to) && to.length >= 1 && to.every(item => emailValidation(item))))
            throw new EntityError('To needs to be an array of strings with at least 1 element inside, all of the elements need to be of type string, they cannot be empty or undefined, they must be less than 100 characters in length, and they must be in proper email format.');

        return true;
    }

    validateCC(cc) {
        if(!(Array.isArray(cc) && cc.every(item => emailValidation(item))))
            throw new EntityError('CC needs to be an array of strings, all of the elements need to be of type string, they cannot be empty or undefined, they must be less than 100 characters in length, and they must be in proper email format.');
        
        return true;
    }

    validateBCC(bcc) {
        if(!(Array.isArray(bcc) && bcc.every(item => emailValidation(item))))
            throw new EntityError('BCC needs to be an array of strings, all of the elements need to be of type string, they cannot be empty or undefined, they must be less than 100 characters in length, and they must be in proper email format.');

        return true;
    }

    validateSubject(subject) {
        if(!(typeof subject === 'string' && subject.length > 0 && subject.length <= 75))
            throw new EntityError('Subject needs to be of type string, it cannot be empty or undefined, and it needs to be between 1 and 75 characters.');

        return true;
    }

    validateText(text) {
        if(!(typeof text === 'string' && text.length !== 0 && text.length <= 1000))
            throw new EntityError('Text needs to be of type string, it cannot be empty or undefined, and it needs to be between 1 and 1000 characters.');

        return true;
    }

    validateHTML(html) {
        if(!(typeof html === 'string' && html.length !== 0 && html.length <= 5000))
            throw new EntityError('HTML needs to be of type string, it cannot be empty or undefined, and it needs to be between 1 and 5000 characters.');

        return true;
    }

    validateAttachments(attachments) {
        // This isn't implemented yet as it isn't something that is useful at this moment.
    }
}