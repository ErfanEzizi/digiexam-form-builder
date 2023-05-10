import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { Field } from './types';
import { ADD_FIELD, DELETE_FIELD, FormActionTypes } from './actions';

const initialState = {
  fields: [] as Field[],
};

export type formState = typeof initialState;

const formReducer = (state = initialState, actions: FormActionTypes): formState => {
  switch (actions.type) {
    case ADD_FIELD:
      return {
        ...state,
        fields: [...state.fields, {...actions.payload, id: uuidv4()}],
      };
    case DELETE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== actions.payload),
      }
    default:
      return state;
  }
}

export const validationSchema = (fields: Field[]) => {
  fields.reduce((schema, field) => {
    if( field.validation ) {
      return { ...schema, [field.id]: field.validation }
    }
    return schema;
}, {})
  return Yup.object().shape
}