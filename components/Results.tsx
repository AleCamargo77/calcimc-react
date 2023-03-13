// import { useState } from "react";
import styles from "../src/styles/Results.module.css";
import Inputs from "./Inputs";
// import { calcImc } from "../functions/functions";

export default function Results(props: any) {
  return (
    <div id={styles.containerResult} className={styles.hide}>
      <p id={styles.numberImc}>
        Seu IMC: <span>{props.teste} </span>
      </p>
      <p id={styles.infoImc}>
        Classificação atual: <span>{props.classification}</span>
      </p>
      <h3>Confira as classificações:</h3>
      <div id={styles.resultClassification}>
        <div className={styles.tableHeader}>
          <h4>IMC: </h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
      </div>
      <button id={styles.back}>Voltar</button>
    </div>
  );
}
