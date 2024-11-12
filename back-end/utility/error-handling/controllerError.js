export class ControllerError extends Error {
    constructor({ message, error }) {
        super(message);
        this.type = 'ControllerError';
        this.status = error ? error.status : 500;
        this.error = error ? error.message : 'Error within the controller.';
        this.stack = error ? error.stack : null;
    }
}