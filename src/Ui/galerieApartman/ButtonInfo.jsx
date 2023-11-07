import styles from "./ButtonInfo.module.css";
import { Link } from "react-router-dom";

function ButtonInfo({ to, children, onClick }) {
  return (
    <div>
      <Link to={to} className={styles.button} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
}

export default ButtonInfo;
