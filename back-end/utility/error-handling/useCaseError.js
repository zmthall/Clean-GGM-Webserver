export class UseCaseError extends Error {
    constructor({ message, status, error }) {
        super(message);
        this.type = 'UseCaseError';
        this.status = error ? error.status : 500;
        this.error = error ? error.message : 'Error within use-case.';
        this.stack = error ? error.stack : null;
    }
}