import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Paragraph from "../UI/Paragraph/Paragraph";
import Title from "../UI/Title/Title";
import styles from "./Calculator.module.scss";
import CurrencyInput from "react-currency-input-field";

const MONTHS_OPTIONS = [
  {
    name: "3",
    isActive: false,
  },
  {
    name: "6",
    isActive: false,
  },
];

export default function Calculator() {
  const [monthsOptions, setMonthsOptions] = useState(MONTHS_OPTIONS);
  const [rent, setRent] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [months, setMonths] = useState<string>("1");
  const [monthsAllowed, setMonthsAllowed] = useState<number>(0);
  const [monthsDifference, setMonthsDifference] = useState<number>();
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const result = rent * Number(months);
    if (monthsDifference && monthsDifference > 2) {
      setResult(result);
    }
  }, [rent, months]);

  useEffect(() => {
    if (startDate) {
      const today = new Date();
      if (startDate > today) {
        setStartDate(today);
      }
    }
    if (endDate) {
      const today = new Date();
      if (endDate < today) {
        setEndDate(today);
      }
    }
    if (startDate && endDate) {
      const monthDifference =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
      if (monthDifference > 2) {
        setMonthsAllowed(monthDifference);
      } else {
        setMonthsAllowed(0);
        setMonthsOptions(MONTHS_OPTIONS);
        setResult(0);
      }
      setMonthsDifference(monthDifference);
    }
    if (monthsDifference && monthsDifference < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }, [startDate, endDate, monthsDifference]);

  const monthsOptionsHandler = (months: string) => {
    const newMonthsOptions = monthsOptions.map((option) => {
      if (option.name === months) {
        return {
          ...option,
          isActive: true,
        };
      } else {
        return {
          ...option,
          isActive: false,
        };
      }
    });
    setMonthsOptions(newMonthsOptions);
    setMonths(months);
  };

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
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
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
            {monthsOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                className={`${styles.calculatorOption} ${
                  option.isActive ? styles.active : ""
                }`}
                onClick={() => monthsOptionsHandler(option.name)}
                disabled={Number(option.name) > monthsAllowed ? true : false}
              >
                {option.name}
              </button>
            ))}
          </div>
          {error && (
            <Paragraph size="small">
              <b className="red">
                Debes tener al menos 3 meses de contrato restantes
              </b>
            </Paragraph>
          )}
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
