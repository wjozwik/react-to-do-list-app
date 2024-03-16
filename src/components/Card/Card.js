import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();
  const cardId = props.id;

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  const handleRemoval = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };
  
  return (
  <li className={styles.card}>
    {props.title}
    <div>
      <button onClick={handleClick}>
        <span className={clsx('fa fa-star-o', props.isFavorite && styles.active)} />
      </button>
      <button onClick={handleRemoval}>
        <span className='fa fa-trash' />
      </button>
    </div>
  </li>
  );
};

export default Card;