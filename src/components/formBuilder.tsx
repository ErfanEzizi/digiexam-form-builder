import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { Field } from "../store/types";
import { State } from "../store/store";
import { addField, deleteField } from "../store/actions";
import TextInput from "./formFields/textInput";
import CheckBoxInput from "./formFields/checkBoxInput";
import styles from './styles.module.scss'

export const FormBuilder: FC = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state: State) => state.fields);
  const textInputs = fields.filter(field => field.type === 'text');
  const checkBoxInputs = fields.filter(field => field.type === 'checkbox');
  const handleAddTextInput = (type: Field['type']) => {
    const newField: Field = {
      id: uuidv4(),
      type: type
    }
    dispatch(addField(newField))
  }

  const handleRemoveField = (id: string) => {
    dispatch(deleteField(id))
  }

  return (
    <div className={styles['container']}>
      <h1 className={styles['header']}> Form Builder </h1>
      <div className={styles['buttons']}>
        <button onClick={()=>handleAddTextInput('text')}> Add Text field </button>
        <button onClick={() =>handleAddTextInput('checkbox')}> Add checkbox field </button>
      </div>
      <form>
        <div className={styles['textInput']}>
          {
            textInputs.map((field) => (
              <TextInput 
              id={field.id}
              onRemove={() => handleRemoveField(field.id)}/>
              ))
            }
        </div>
        <div className={styles['checkBox']}>
          {
            checkBoxInputs.map((field) => (
              <CheckBoxInput
              id={field.id}
              onRemove={()=> handleRemoveField(field.id)}/>
            ))
          }
        </div>

      {/* {
        fields.map((field: Field) => {
          switch( field.type ) {
            case 'text':
              return (
                <TextInput 
                id={field.id}
                onRemove={() => handleRemoveField(field.id)}/>
              )
            case 'checkbox':
              return (
                <CheckBoxInput
                id={field.id}
                onRemove={()=> handleRemoveField(field.id)}/>
              )
            default:
              return null
          }
        })
      } */}
      </form>
    </div>
  )
}
