export interface FormData {
    companyname: string;
    natureofbussiness: string;
    address: string;
    postcode: string;
    contactname: string;
    contactphone: string;
    email: string;
    linkedin: string;
    idea: string;
    file: File | null;
  }

  export interface FormErrors {
    companyname?: string;
    natureofbussiness?: string;
    address?: string;
    postcode?: string;
    contactname?: string;
    contactphone?: string;
    email?: string;
    linkedin?: string;
    idea?: string;
    file?: File | null;
  }