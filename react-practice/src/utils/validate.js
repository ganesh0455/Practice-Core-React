export const validateData = (email, passwords, ...rest) => {
    // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // Password rules
    // Be between 8 and 20 characters long.
    // Contain at least one uppercase letter.
    // Contain at least one lowercase letter.
    // Contain at least one digit.
    // Allow special characters.
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const  isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/.test(passwords);

    const  isConfirmPasswordValid = rest.confirmPasswor === passwords;

    if(!isEmailValid) return "Please enter a valid email address.";
    if(!isPasswordValid) return "Please enter a valid password.";
    if(!isConfirmPasswordValid) return "Password and Confirm password should be same.";

    return null; // if email and password is valid then we are returning null.
}