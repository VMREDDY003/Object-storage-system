import React, { useState } from "react";

function Form() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  const [img, setImg] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImg(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/upload";
    const formData = new FormData();
    formData.append("file", file, file.name);
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("File upload failed");
        }
      })
      .then((data) => {
        setText(data.text);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setText(error.text);
      });
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      <br />
      <br />
      {text && <b>{text}</b>}
      <br />
      {img && <img src={img} alt="perview" width={100} height={200} />}
    </div>
  );
}

export default Form;
