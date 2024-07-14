import { useState } from "react";
import styles from "../styles/Uploader.module.css";

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
        console.log("Uploading file:", selectedFile);
    } else {
        console.log("No file selected");
    }
};

return (
    <div className={styles.main}>
        <h1>Image Upload</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            <button type="submit">Upload</button>
        </form>
    </div>
);
}

export default Uploader;