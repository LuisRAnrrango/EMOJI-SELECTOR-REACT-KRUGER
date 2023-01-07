import { forwardRef, useState, useRef, useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiButtom from "./EmojiButtom";
import EmojiSearch from "./EmojiSearch";
export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([...emojiList]);

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        //En esta linea de abajo no realiza copia en el video
        setEmojis(...emojiList);
      }
    });
  }, []);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }
  function handleSearch(e) {
    const q = e;

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  /*   function EmojiPickerContainer() {
    return (
      <div>
        <EmojiSearch onSearch={handleSearch}></EmojiSearch>
        <div>
          {emojiList.map((emoji) => (
            <div key={emoji.symbol}>{emoji.symbol}</div>
          ))}
        </div>
      </div>
    );
  }  */
  function handleClickEmoji(emoji) {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    inputRef.current.focus();
  }
  return (
    <div ref={containerRef}>
      <button onClick={handleClickOpen}>😊</button>
      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch}></EmojiSearch>
          <div>
            {emojis.map((emoji) => (
              <EmojiButtom
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleClickEmoji}
              ></EmojiButtom>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default forwardRef(EmojiPicker);
