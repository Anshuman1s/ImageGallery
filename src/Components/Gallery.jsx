import { useEffect } from "react";
import styles from "../styles/Gallery.module.css";
import { list } from 'aws-amplify/storage';


async function Gallery() {

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await list({
                  prefix: 'photos/'
                });
                console.log(result);
              } catch (error) {
                console.log(error);
              }
        }
        fetchData();
    }, []);

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
