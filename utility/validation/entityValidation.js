export function emailValidation(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function phoneNumberValidation(phoneNumber) {
    const regex = /^(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/;
    return regex.test(phoneNumber);
}