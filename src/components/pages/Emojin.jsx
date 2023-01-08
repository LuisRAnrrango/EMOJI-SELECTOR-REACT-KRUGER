
import React from "react";
import EmojiPickerInput from "../emojiPicker/EmojiPickerInput";

export const Emojin = () => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <h5 class="card-header">Chat GraiBook</h5>
          <div class="card-body">
            <h5 class="card-title">Conversa con Nosotros</h5>
            <p class="card-text">
              Mediante este cuadro de Dialogo puedes enviar un mensaje Directo al WhatsApp de GranRest Tecnolgy.
            </p>
            <EmojiPickerInput></EmojiPickerInput>

           {/*  <i className="bi bi-send"></i> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};
