import React from "react";
import EmojiPickerInput from "../emojiPicker/EmojiPickerInput";

export const Emojin = () => {
  return (
  <div className="tarjeta">
    <div className="card w-50">
      <h5 className="card-header">Chat GraiBook</h5>
      <div className="card-body">
        <h5 className="card-title">Conversa con Nosotros</h5>
        <p className="card-text">
          Mediante este cuadro de dialogo puedes enviar un mensaje directo al
          WhatsApp de GranRest Tecnolgy.
        </p>
        <EmojiPickerInput></EmojiPickerInput>

        {/*  <i className="bi bi-send"></i> */}
      </div>
    </div>
    </div>
  );
};
