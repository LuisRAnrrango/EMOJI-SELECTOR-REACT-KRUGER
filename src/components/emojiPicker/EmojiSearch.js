
import styles from "./emojiPicker.module.scss";
export default function EmojiSearch({ onSearch }) {
  return <input placeholder="Buscar emoji" className={styles.search} onChange={onSearch} />;
}
