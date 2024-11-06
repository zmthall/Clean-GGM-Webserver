export class EntityError extends Error {
    constructor(message) {
        super(message);
        this.type = 'EntityError';
        this.status = 400;
    }
}