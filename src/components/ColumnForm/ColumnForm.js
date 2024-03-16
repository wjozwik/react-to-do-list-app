import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const listId = props.listId;
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.label}>Title:</span> 
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.label}>Icon:</span> 
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>
        Add column
      </Button>
    </form>
	);
};

export default ColumnForm;
