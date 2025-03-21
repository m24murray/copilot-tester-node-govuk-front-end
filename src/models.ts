export interface Contact {
  fullName: string;
  email: string;
  contactNumber: string;
}

export interface Address {
  addressLine1: string;
  addressLine2?: string;
  postcode: string;
  city: string;
  town?: string;
  country: string;
}