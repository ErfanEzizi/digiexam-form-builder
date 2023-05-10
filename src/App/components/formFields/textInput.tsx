import { FC } from 'react';
import { useField } from 'formik';
interface Props {
  lable: string;
  name: string;
  validation: any;
}

const TextInput: FC<Props> = ({ lable, name, validation }) => {
  const [field, meta] = useField({name, validate: validation})

  return (
    <div>
      <label htmlFor={name}>{lable}</label>
      <input type='text' {...field}/>
      {meta.touched && meta.error && (
        <>
          <div>
            {meta.error}
          </div>
        </>
      )}
    </div>
  );
};

export default TextInput;