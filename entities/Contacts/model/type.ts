export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  orderNumber: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}