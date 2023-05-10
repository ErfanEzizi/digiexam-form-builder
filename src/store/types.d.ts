export interface Field {
  id: string;
  label: string;
  type: 'text' | 'checkbox';
  validation?: Yup.AnyObjectSchema;
}

export interface FormState {
  fields: Field[];
}