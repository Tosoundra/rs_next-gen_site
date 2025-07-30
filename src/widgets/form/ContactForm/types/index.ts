export interface ContactFormData {
  fullname: string;
  company: string;
  email: string;
  message: string;
  budget: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}
