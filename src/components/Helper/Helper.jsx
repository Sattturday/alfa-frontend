import FriendlyPic from '../../assets/img/friendly-pic.png';
import styles from './Helper.module.scss';

// 2 варианта отображения подсказки - с маркированным списком и с параграфом
// соответственно type = list и type = paragraph
// по умолчанию type = paragraph
function Helper({ title, advices, type = 'paragraph' }) {
  return (
    <section className={`${styles.helper} ${styles[type]}`}>
      <img src={FriendlyPic} alt='Смайл' />
      <h3 className={styles.title}>{title}</h3>
      {type === 'paragraph' ? (
        <p className={styles.text}>{advices}</p>
      ) : (
        <ul className={styles.advices}>
          {advices.map((advice, index) => (
            <li key={index} className={styles.item}>
              <p>{advice}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Helper;
