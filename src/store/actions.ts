import { Field } from './types';
import * as Yup from 'yup';
export const ADD_FIELD = 'ADD_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const ACTION_ERROR = 'ACTION_ERROR'

interface AddAction {
  type: typeof ADD_FIELD;
  payload: Field
}

interface DeleteAction {
  type: typeof DELETE_FIELD;
  payload: string;
}

interface ActionError {
  type: typeof ACTION_ERROR,
  payload: string
}

export type FormActionTypes = AddAction | DeleteAction | ActionError

const validationSchema = {
  text: Yup.object(),
  checkbox: Yup.object()
}

export const addField = (field: Field): FormActionTypes => {
  const { type, validation } = field
  const schema = validationSchema[type]?.concat(validation ?? Yup.object())

  try {
    schema.validateSync(field)
    return {
      type: ADD_FIELD,
      payload: {
        ...field,
        validation: schema
      }
    }
  } catch (error) {
    return {
      type: 'ACTION_ERROR',
      payload: "invalid Feild"
    }
  }
}

export const deleteField = (id: string): FormActionTypes => {
  return {
    type: DELETE_FIELD,
    payload: id
  }
}