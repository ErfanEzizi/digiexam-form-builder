import { FC } from 'react';
interface Props {
  id: string;
  onRemove: () => void
}

const TextInput: FC<Props> = ({ id, onRemove }) => {

  return (
    <div>
      {/* <label>Enter your text here</label> */}
      <input type='text' id={id} />
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default TextInput;