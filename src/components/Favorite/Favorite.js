import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(state => getFavoriteCards(state));
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
        </ul>
      </article>
    </div>
  );
};


export default Favorite;
