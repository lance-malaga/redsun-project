import Image from 'next/image';

import styles from "./MenuItem.module.scss"
import {timer} from '@/../public/images/Images';

export default function MenuItem({item}) {
  return (
    <div className={styles.card}>
      <Image 
        src={item.image} 
        alt={`${item.product} image`} 
        className={styles.card__img}
        width={250}
        height={250}
      />
      <div className={styles.card__info}>
        <div className={styles.specs}>
          <p>PHP {item.price}</p>
          <div> 
            <Image src={timer} alt='timer-icon' width={15} height={15}/>
            <span>{item.time} mins</span> 
          </div>
          <div>
            <Image src={item.categoryImage} alt={`${item.category} icon`} width={20} height={20}/>
          </div>
        </div>
        <h3>{item.product}</h3>
        <p>{item.info}</p>
      </div>
      <div className={styles.card__button}>
        {/* <input type="text" name="product" value={item.product} hidden/>
        <input type="text" name="product" value={item.price} hidden/> */}
        <button> ADD </button>
      </div>
    </div>
  )
}