// import { useState } from "react";
import styles from "../src/styles/Results.module.css";
import Inputs from "./Inputs";
// import { calcImc } from "../functions/functions";

export default function Results(props: any) {
  function back() {
    window.location.reload();
  }

  let colorClass;

  if (props.currentRating === "Magreza") {
    colorClass = "yellow";
  } else if (props.currentRating === "Normal") {
    colorClass = "styles.green";
  } else {
    colorClass = "red";
  }

  console.log(colorClass);
  return (
    <div id={styles.containerResult} className={styles.hide}>
      <p id={styles.numberImc}>
        Seu IMC: <span className={colorClass}>{props.resultImc} </span>
      </p>
      <p id={styles.infoImc}>
        Classificação atual: <span>{props.currentRating}</span>
      </p>
      <h3>Confira as classificações:</h3>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificaçäo</th>
            <th>Obesidade</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td></td>
            <td>Linha 1, Coluna 2</td>
            <td>Linha 1, Coluna 3</td>
          </tr>
          <tr>
            <td>Linha 2, Coluna 1</td>
            <td>Linha 2, Coluna 2</td>
            <td>Linha 2, Coluna 3</td>
          </tr>
          <tr>
            <td>Linha 3, Coluna 1</td>
            <td>Linha 3, Coluna 2</td>
            <td>Linha 3, Coluna 3</td>
          </tr> */}
        </tbody>
      </table>

      {/* <div id={styles.resultClassification}>
        <div className={styles.tableHeader}>
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
      </div> */}
      <button onClick={back} id={styles.back}>
        Voltar
      </button>
    </div>
  );
}
