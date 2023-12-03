import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Paragraph from "../UI/Paragraph/Paragraph";
import Title from "../UI/Title/Title";
import styles from "./Calculator.module.scss";
import CurrencyInput from "react-currency-input-field";

export default function Calculator() {
  const [rent, setRent] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [months, setMonths] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const result = rent * months;
    setResult(result);
  }, [rent, months]);

  console.log(rent, startDate, endDate, months);

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorText}>
        <Title semantic="h3" size="large">
          <b>Calcula el monto de tu Adelantto</b>
        </Title>
        <Paragraph size="medium">
          Ingresa el monto de tu renta mensual y conoce en cuestión de segundos
          hasta cuanto podrías recibir como préstamo.{" "}
          <b>¡Descarga Adelantto hoy!</b>
        </Paragraph>
      </div>
      <div className={styles.calculatorComponent}>
        <form className={styles.calculatorForm}>
          <Paragraph size="medium">
            <b>Valor de tu renta mensual</b>
          </Paragraph>
          <CurrencyInput
            prefix="$"
            defaultValue={0}
            decimalsLimit={2}
            onValueChange={(value) => setRent(Number(value))}
            className={styles.calculatorInput}
          />
          <Paragraph size="medium">
            <b>Fecha de inicio del contrato de arrendamiento</b>
          </Paragraph>
          <input
            type="date"
            className={styles.calculatorInput}
            onChange={(event) => setStartDate(new Date(event.target.value))}
          />
          <Paragraph size="medium">
            <b>Fecha de fin del contrato de arrendamiento</b>
          </Paragraph>
          <input
            type="date"
            className={styles.calculatorInput}
            onChange={(event) => setEndDate(new Date(event.target.value))}
          />
          <Paragraph size="medium">
            <b>¿Cuántos meses de Adelantto necesitas?</b>
          </Paragraph>
          <div className={styles.calculatorOptions}>
            <div
              className={`${styles.calculatorOption} ${
                months === 1 ? styles.active : ""
              }`}
              onClick={() => setMonths(1)}
            >
              1
            </div>
            <div
              className={`${styles.calculatorOption} ${
                months === 2 ? styles.active : ""
              }`}
              onClick={() => setMonths(2)}
            >
              2
            </div>
            <div
              className={`${styles.calculatorOption} ${
                months === 3 ? styles.active : ""
              }`}
              onClick={() => setMonths(3)}
            >
              3
            </div>
            <div
              className={`${styles.calculatorOption} ${
                months === 4 ? styles.active : ""
              }`}
              onClick={() => setMonths(4)}
            >
              4
            </div>
            <div
              className={`${styles.calculatorOption} ${
                months === 5 ? styles.active : ""
              }`}
              onClick={() => setMonths(5)}
            >
              5
            </div>
            <div
              className={`${styles.calculatorOption} ${
                months === 6 ? styles.active : ""
              }`}
              onClick={() => setMonths(6)}
            >
              6
            </div>
          </div>
          <Paragraph size="medium">
            <b>Monto pre aprobado por Adelantto</b>
          </Paragraph>
          <CurrencyInput
            prefix="$"
            defaultValue={0}
            decimalsLimit={2}
            value={result}
            onValueChange={(value, name) => console.log(value, name)}
            className={styles.calculatorInput}
            disabled
          />
          <Button size="large">Inicia tu proceso</Button>
        </form>
      </div>
    </div>
  );
}
