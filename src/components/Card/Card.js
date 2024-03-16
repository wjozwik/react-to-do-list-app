import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();
  const cardId = props.id;

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };
  
  return (
  <li className={styles.card}>
    {props.title}
    <button onClick={handleClick}>
      <span className={clsx('fa fa-star-o', props.isFavorite && styles.active)} />
    </button>
  </li>
  );
};

export default Card;