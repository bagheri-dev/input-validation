import { FormData, FormErrors } from "./interface";

function validateEmail (email : string) {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email)
}

const validateForm = (data : FormData) : FormErrors => {
      
      
    let errors : FormErrors = {}

    // Error compony name
    if(!data.companyname) {
        errors.companyname = "compony name is required"
    }
    // Error Nature of Bussiness
    if(!data.natureofbussiness) {
        errors.natureofbussiness = "Nature of Bussiness is required"
    }
    // Error Address
    if(!data.address) {
        errors.address = "Address is required"
    }
    // Error Postcode
    if(!data.postcode && data.postcode.length !== 10) {
        errors.postcode = "Postcode must be exactly 10 digits"
    }
    // Error Contact name
    if(!data.contactname) {
        errors.contactname = "Contact name is required"
    }
    // Error Contact Phone
    if(!data.contactphone && !/^0\d{10}$/.test(data.contactphone)) {
        errors.contactphone = "Phone number must be exactly 11 digits and start with 0"
    }
    // Error Email
    if(!data.email) {
        errors.email = "Email is required"
    } else if (!validateEmail(data.email)) {
        errors.email = "Email must be a valid Gmail address (e.g., example@gmail.com)"
    }
    // Error Linkedin
    if(!data.linkedin) {
        errors.linkedin = "Linkedin is required"
    }
    // Error Idea
    if(!data.idea) {
        errors.idea = "idea is required"
    }

    // Error File
    if (data.file) {
        const maxFileSize = 10 * 1024 * 1024; // 10MB in bytes
        if (data.file.size > maxFileSize) {
            errors.file = "File size must be less than or equal to 10 MB";
        }
    }

    return errors;
  };
 
export default validateForm;