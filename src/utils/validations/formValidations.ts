import * as yup from "yup";

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required!")
        .matches(/^[a-zA-Z\s]+$/, "Name must contain only alphabets!"),
    email: yup
        .string()
        .email()
        .required("Email is required!"),
    phone: yup
        .string()
        .required("Phone is required!")
        .matches(/^[0-9]+$/, "Phone number must contain only numbers!"),
    dob: yup
        .string()
        .required("Date of Birth is required!")
        .test('dob', 'Date of Birth cannot be in the future', (value) => {
            const today = new Date();
            const selectedDate = new Date(value);
            return selectedDate <= today;
        }),
    address: yup
        .string()
        .required("Address is required!")
        .max(180, "Address must be less than 180 characters!"),
    gender: yup
        .string()
        .required("Gender is required!")
        .matches(/(male|female|other)/, "Select a valid gender!"),
});