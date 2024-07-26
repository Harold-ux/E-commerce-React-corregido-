import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/firebaseConfig.js";
import './AddDocument.css';

const AddDocument = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleAddDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, "testCollection"), {
        name,
        value,
      });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setValue("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="add-document-container">
      <h2>Add a New Document</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddDocument} style={{ padding: "5px 10px", cursor: "pointer" }}>
          Add Document
        </button>
      </div>
    </div>
  );
};

export default AddDocument;
