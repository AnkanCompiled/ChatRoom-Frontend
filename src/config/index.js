const BACKEND_URL = "";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const USERNAME_REGEX = /^(?=.*[A-Za-z0-9])[\S]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export { BACKEND_URL, EMAIL_REGEX, USERNAME_REGEX, PASSWORD_REGEX };
