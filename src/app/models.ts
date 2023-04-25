export interface Admin {
  'email': string;
  'name': string;
  'password': string;
  'id': number;
}

export interface Login {
  'user': Admin;
  'jwt': string;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  mobile: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  locale: string;
  active: boolean;
  bankid?: string;
  createdAt: string;
}
