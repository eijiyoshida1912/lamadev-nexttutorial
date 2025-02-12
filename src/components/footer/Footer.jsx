import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; lama-dev</div>
      <div>
        <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="lama dev" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="lama dev" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="lama dev" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="lama dev" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
