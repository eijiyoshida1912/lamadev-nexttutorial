import Image from "next/image";
import Hero from "../../public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );
}
