import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        const columnId = props.columnId;
        dispatch(addCard({ title, columnId }));
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;