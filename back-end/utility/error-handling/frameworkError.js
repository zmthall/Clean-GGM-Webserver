export class RepositoryError extends Error {
    constructor({ message, error }) {
        super(message);
        this.type = 'RepositoryError';
        this.status = error ? error.status : 500;
        this.error = error ? error.message : 'Failed inside the repository.';
        this.stack = error ? error.stack : null;
    }
}