import styles from "../src/styles/Inputs.module.css";
import data from "../src/pages/data.js";
import { useState } from "react";
import { validDigits } from "../functions/functions";
import { calcImc } from "../functions/functions";

export default function Inputs() {
  const [valueHeight, setValueHeight] = useState("");
  const [valueWeight, setValueWeight] = useState("");
  const [classification, setClassification] = useState(data);

  // console.log(classification);

  function handleHeightChange(e: any) {
    setValueHeight(validDigits(e.target.value));
  }

  function handleWeightChange(e: any) {
    setValueWeight(validDigits(e.target.value));
  }

  function calcBtn() {
    const height = +valueHeight.replace(",", ".");
    const weight = +valueWeight.replace(",", ".");

    if (!height || !weight) {
      return;
    }

    const imc: any = calcImc(weight, height);

    // let info;

    // classification.forEach((item) => {
    //   if (imc > item.min && imc < item.max) {
    //     info = item.info;
    //   }
    // });

    // if (!info) return;

    alert(imc);
  }

  function clearValues() {
    setValueHeight("");
    setValueWeight("");
  }

  return (
    <div className={styles.container}>
      <div id={styles.containerCalc}>
        <h2>Calculadora de IMC</h2>
        <form id={styles.formImc}>
          <div className={styles.formInputs}>
            <div className={styles.formControl}>
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                value={valueHeight}
                onChange={handleHeightChange}
                placeholder={"Exemplo 1,70"}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                value={valueWeight}
                onChange={handleWeightChange}
                placeholder="Exemplo 68,5"
              />
            </div>
            <div className={styles.btnControl}>
              <button onClick={calcBtn} id={styles.calc}>
                Calcular
              </button>
              <button onClick={clearValues} id={styles.clear}>
                Limpar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
