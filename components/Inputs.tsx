import styles from "../src/styles/Inputs.module.css";
import data from "../public/data";
import { useState } from "react";
import { validDigits } from "../functions/functions";
import { calcImc } from "../functions/functions";
import Results from "./Results";

export default function Inputs() {
  const [valueHeight, setValueHeight] = useState("");
  const [valueWeight, setValueWeight] = useState("");
  const [result, setResult] = useState("");
  const [classification, setClassification] = useState(data);
  const [isSubmited, setSubmited] = useState<boolean>(false);

  // console.log(classification);

  function handleHeightChange(e: any) {
    setValueHeight(validDigits(e.target.value));
  }

  function handleWeightChange(e: any) {
    setValueWeight(validDigits(e.target.value));
  }

  if (isSubmited) {
    const height = +valueHeight.replace(",", ".");
    const weight = +valueWeight.replace(",", ".");

    const imc = +calcImc(weight, height);
    // const imcAsNumber: number = +imc;

    let infos;
    let level;
    classification.map((item) => {
      const { classific, info, obesity } = item;
      if (imc > item.min && imc < item.max) {
        infos = info;
      }
    });

    return (
      <div>
        <Results resultImc={imc} currentRating={infos} />
      </div>
    );
  }

  function calcBtn(ev: React.FormEvent) {
    ev.preventDefault();

    if (isSubmited) {
      const height = +valueHeight.replace(",", ".");
      const weight = +valueWeight.replace(",", ".");

      if (!height || !weight) {
        return;
      }

      const imc = +calcImc(weight, height);
      const imcAsNumber: number = +imc;
    }
    setSubmited(true);
  }

  function clearValues(ev: any) {
    ev.preventDefault();
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
              <button type="submit" onClick={calcBtn} id={styles.calc}>
                Calcular
              </button>
              <button type="submit" onClick={clearValues} id={styles.clear}>
                Limpar
              </button>
            </div>
          </div>
        </form>
        {/* <h2>{result}</h2> */}
      </div>
    </div>
  );
}
