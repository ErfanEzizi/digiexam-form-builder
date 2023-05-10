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
        fields: [...state.fields, {...actions.payload}],
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

export default formReducer