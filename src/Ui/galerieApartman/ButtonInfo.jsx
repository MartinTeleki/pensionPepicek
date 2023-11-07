import styles from "./ButtonInfo.module.css";
import { Link } from "react-router-dom";

function ButtonInfo({ to, children }) {
  return (
    <div>
      <Link to={to} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}

export default ButtonInfo;
