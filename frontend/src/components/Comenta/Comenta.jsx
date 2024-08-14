import React, { useEffect, useState } from "react";
import List from "../List/List";
import "../Comenta/Comenta.css";
import { RiCornerRightDownLine } from "react-icons/ri";
import axios from "axios";
import { baseURL } from "../../utils/constant";

const Comenta = () => {
  const [input, setInput] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setComentarios(res.data);
    });
  }, [updateUI]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setUpdateId(null);
        setInput("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const Comenta = () => {
    if (input.trim() === "") {
      alert("Por favor, ingresa un comentario e inténtelo de nuevo");
      return;
    }
    axios.post(`${baseURL}/save`, { comentario: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const Actualiza = () => {
    if (input.trim() === "") {
      alert("Por favor, ingresa un comentario e inténtelo de nuevo");
      return;
    }
    axios
      .put(`${baseURL}/update/${updateId}`, { comentario: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setInput("");
      });
  };

  return (
    <main>
      <p className="comenta">
       Comentarios <span>&nbsp;&nbsp;</span>
        <RiCornerRightDownLine fontSize={18}/>
      </p>
      <div className="input-holder">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="6"
          cols="200"
        ></textarea>
        <button
          id="uno"
          type="submit"
          onClick={updateId !== null ? Actualiza : Comenta}
        >
          {updateId !== null ? "actualiza" : "comenta"}
        </button>
      </div>
      <ul className="comentarios">
        {comentarios.map((comentario) => (
          <List
            key={comentario._id}
            id={comentario._id}
            comentario={comentario.comentario}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  );
};

export default Comenta;
