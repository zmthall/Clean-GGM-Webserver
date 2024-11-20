export class UtilityError extends Error {
    constructor({ message, error }) {
        super(message);
        this.type = 'UtilityError';
        this.status = error ? error.status : 400;
        this.error = error ? error.message : 'Failed using a Utility function';
        this.stack = error ? error.stack : null;
    }
}