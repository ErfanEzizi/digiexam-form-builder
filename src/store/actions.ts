import { Field } from './types';

export const ADD_FIELD = 'ADD_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';

interface AddAction {
  type: typeof ADD_FIELD;
  payload: Field
}

interface DeleteAction {
  type: typeof DELETE_FIELD;
  payload: string;
}

export type FormActionTypes = AddAction | DeleteAction

export const addField = (field: Field): FormActionTypes => {
  return {
    type: ADD_FIELD,
    payload: field
  }
}

export const deleteField = (id: string): FormActionTypes => {
  return {
    type: DELETE_FIELD,
    payload: id
  }
}