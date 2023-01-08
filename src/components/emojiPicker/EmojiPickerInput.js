import { useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";

import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  //Creando los Estados para acumular mensajes y para enviar
  const [mensaje, setMensaje] = useState("");
  //const [mensajes, setMensajes] = useState([]);

  //obtener data de caja de texto
  function handleChange(e) {
    const q = e.target.value;
    setMensaje(q);
  }
  function handleClick() {
    /*  const newMensaje={
      id:crypto.randomUUID(),
      mensaje:mensaje,
      completed:false
    }
    //Inserto a mi estado de []
    setMensajes(...mensajes,newMensaje); */
    setMensaje(
      `https://api.whatsapp.com/send?phone=593993273984&text=${mensaje}`
    );
  }

  return (
    <div className={styles.inputContainer}>
      <EmojiPicker ref={inputRef} />
      <input
        type="text"
        className="cajaMensaje form-control form-control-lg"
        placeholder="Escribe aquí"
        ref={inputRef}
        onChange={handleChange}
      />
      <br />
      <a href={mensaje} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          onClick={handleClick}
          className="w-100 btn btn-lg btn-primary"
        >
          Enviar
        </button>
      </a>
      {/*  <div className="mensajeContainer">
        {mensajes.map(item=>(
          <div>{item.mensaje}</div>
        ))}
      </div> */}
    </div>
  );
}
