import Image from "next/image";
import Link from 'next/link';

import styles from "@/styles/home.module.scss";
import { 
  landingBowl,
  arrow,
  sampleItem01,
  sampleItem02,
  sampleItem03,
  sushi01,
  sushi02,
  sushi03,
} from '../../public/images/Images';

export default function Home() {
  return (
    <main>
      <section className={styles.landing__section}>
        <Image src={landingBowl} alt='bowl-img' width={515} height={450} />
        <Link className={styles.action_btn} href='/menu'>
          Get Cooking
          <Image src={arrow} alt='arrow' width={"auto"} height={"auto"}/>
        </Link>
      </section>
      <section className={styles.about__section}>
        <div style={{textAlign: "center"}}>
          <h1 className={styles.header_title}>Savor the Flavors of <span>Japan</span>
          </h1>
          <p style={{maxWidth: "650px", margin: "0 auto"}}>Discover authentic Japanese recipes and have the ingredients delivered to your door. From sushi to ramen, make every meal a culinary adventure!</p>
        </div>
        <div className={styles.sample_item__container}>
          <Image src={sampleItem01} alt='sample-item-image01' width={"auto"} height={"auto"}/>
          <Image src={sampleItem02} alt='sample-item-image02' width={"auto"} height={"auto"}/>
          <Image src={sampleItem03} alt='sample-item-image03' width={"auto"} height={"auto"}/>
        </div>
        <div className={styles.bottom__content}>
          <div className={styles.sushi__container}>
            <Image src={sushi01} alt='sushi-img01' width={100} height={100}/>
            <Image src={sushi02} alt='sushi-img02' width={100} height={100}/>
            <Image src={sushi03} alt='sushi-img03' width={100} height={100}/>
          </div>
          <div className={styles.info__container}>
            <div>
              <h1 className={styles.header_title}>Who Are We?</h1>
              <p>Red Sun has the easiest recipes where you can get the quality ingredients in ready-to-cook kits that are a cinch to cook and clean up.</p>
            </div>
            <div>
              <h1 className={styles.header_title}>Choose Our Meals</h1>
              <p>Our chef-designed recipes include balanced meals, quick one-pan dinners, and top-rated customer favorites.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
