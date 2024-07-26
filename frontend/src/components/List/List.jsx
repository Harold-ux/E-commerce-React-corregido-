import React from "react";
import "./List.css";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { baseURL } from "../../utils/constant";
import axios from "axios";

const List = ({ id, comentario, setUpdateUI, updateMode }) => {

  const removeComentario = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li className="list">
      {comentario}
      <div className="icon-holder">
        <BiEditAlt className="icon" onClick={() => updateMode(id, comentario)} />
        <BsTrash className="icon" onClick={removeComentario} />
      </div>
    </li>
  );
};

export default List;
