import { useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  //Creando los Estados para acumular mensajes y para enviar
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  //obtener data de caja de texto
  function handleChange(e) {
    const q = e.target.value;
    setMensaje(q);
    console.log(mensaje);
  }
function handleClick(){
  setMensaje(`https://api.whatsapp.com/send?phone=593993273984&text=${mensaje}`)
  console.log(mensaje);
}

  return (
    <div className={styles.inputContainer}>
      <EmojiPicker ref={inputRef} />
      <input ref={inputRef} onChange={handleChange} />

      <div className="App" style={{ fontSize: "20px", color: "blue" }}>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <a
        href={mensaje}
        target="_blank"
      >
        <button type="button" onClick={handleClick} className="w-100 btn btn-lg btn-primary">
          Enviar
        </button>
      </a>

    </div>
  );
}
