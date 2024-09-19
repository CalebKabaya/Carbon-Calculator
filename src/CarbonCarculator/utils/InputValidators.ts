import * as Yup from 'yup';

class InputValidatorsClass {

    name = Yup.string().matches(/[A-Za-z]+/, 'Name must contain only letters').required('Required');
    date = Yup.string().required('Date of Birth is required').matches(/^\d{4}-\d{2}-\d{2}$/, 'Date of Birth must be in the format YYYY-MM-DD')
    kraPinRequired = Yup.string().matches(/^[A]{1}[0-9]{9}[a-zA-Z]{1}$/, 'Invalid KRA number format').required('Required');
    kraPinOptional = Yup.string().matches(/^[A]{1}[0-9]{9}[a-zA-Z]{1}$/, 'Invalid KRA number format');
    email = Yup.string().email('Invalid email').required('Required');
    requiredString = Yup.string().required('Required');
    passport = Yup.string().required('Required').matches(/[A-Z]{1}[0-9]{7}/, 'Invalid passport number');
    phone = Yup.string().required('Required');

}

export const InputValidators = new InputValidatorsClass()