import styles from "../src/styles/Results.module.css";
import Inputs from "./Inputs";

export default function Results(props: any) {
  function back() {
    window.location.reload();
  }

  let colorClass;

  if (props.currentRating === "Magreza") {
    colorClass = "yellow";
  } else if (props.currentRating === "Normal") {
    colorClass = "green";
  } else {
    colorClass = "red";
  }

  return (
    <div id={styles.containerResult} className={styles.hide}>
      <p id={styles.numberImc}>
        Seu IMC: <span className={colorClass}>{props.resultImc} </span>
      </p>
      <p id={styles.infoImc}>
        Classificação atual:{" "}
        <span className={colorClass}>{props.currentRating}</span>
      </p>

      <button onClick={back} id={styles.back}>
        Voltar
      </button>
    </div>
  );
}
