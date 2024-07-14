import styles from "../styles/Gallery.module.css";


async function Gallery() {
    return (
    <div>
      <h1>Gallery</h1>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/img_1.jpg" alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
