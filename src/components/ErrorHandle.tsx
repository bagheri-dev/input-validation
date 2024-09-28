import { FormData, FormErrors } from "./interface";

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
    if(!data.postcode) {
        errors.postcode = "Postcode is required"
    }
    // Error Contact name
    if(!data.contactname) {
        errors.contactname = "Contact name is required"
    }
    // Error Contact Phone
    if(!data.contactphone) {
        errors.contactphone = "Contact phone is required"
    }
    // Error Email
    if(!data.email) {
        errors.email = "Email is required"
    }
    // Error Linkedin
    if(!data.linkedin) {
        errors.linkedin = "Linkedin is required"
    }
    // Error Idea
    if(!data.idea) {
        errors.idea = "idea is required"
    }

    return errors;
  }
 
export default validateForm;