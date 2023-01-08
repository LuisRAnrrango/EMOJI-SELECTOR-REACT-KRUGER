
import React from "react";
import EmojiPickerInput from "../emojiPicker/EmojiPickerInput";

export const Emojin = () => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <h5 class="card-header">Chat GraiBook</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <EmojiPickerInput></EmojiPickerInput>

           {/*  <i className="bi bi-send"></i> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};
