import { FC } from 'react';
interface Props {
  id: string;
  onRemove: () => void
}

const CheckBoxInput: FC<Props> = ({ id, onRemove }) => {

  return (
    <div>
      <input type='checkbox' id={id}/>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default CheckBoxInput;