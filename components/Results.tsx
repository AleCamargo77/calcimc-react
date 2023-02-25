import styles from "../src/styles/Results.module.css";

export default function Results() {
  return (
    <div id={styles.containerResult} className={styles.hide}>
      <p id={styles.numberImc}>
        Seu IMC: <span></span>
      </p>
      <p id={styles.infoImc}>
        Classificação atual: <span></span>
      </p>
      <h3>Confira as classificações:</h3>
      <div id={styles.resultClassification}>
        <div className={styles.tableHeader}>
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
      </div>
      <button id={styles.back}>Voltar</button>
    </div>
  );
}
