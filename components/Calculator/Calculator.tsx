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
  const [mesesOptions, setMesesOptions] = useState(MONTHS_OPTIONS);
  const [renta, setRenta] = useState<number>(0);
  const [fechaInicio, setFechaInicio] = useState<Date>();
  const [fechaFinal, setFechaFinal] = useState<Date>();
  const [meses, setMeses] = useState<number>(0);
  const [diferenciaMeses, setDiferenciaMeses] = useState<number>(0);
  const [pagos, setPagos] = useState<any>([]);
  const [adelantto, setAdelantto] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const interes = meses === 3 ? 0.2 : 0.25;
  const calculoActivo = diferenciaMeses && diferenciaMeses > 2;

  const mesesHandler = (mesesClickeados: string) => {
    const newMesesOptions = mesesOptions.map((option) => {
      if (option.name === mesesClickeados) {
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
    setMesesOptions(newMesesOptions);
    setMeses(Number(mesesClickeados));
  };

  // Logica de negocio
  useEffect(() => {
    const fechaHoy = new Date();
    if (fechaInicio) {
      if (fechaInicio > fechaHoy) {
        setFechaInicio(fechaHoy);
      }
    }
    if (fechaFinal) {
      if (fechaFinal < fechaHoy) {
        setFechaFinal(fechaHoy);
      }
    }
    if (fechaInicio && fechaFinal) {
      const newDiferenciaMeses =
        (fechaFinal.getFullYear() - fechaInicio.getFullYear()) * 12 +
        (fechaFinal.getMonth() - fechaInicio.getMonth());
      if (newDiferenciaMeses < 2) {
        setMesesOptions(MONTHS_OPTIONS);
        setAdelantto(0);
      }
      setDiferenciaMeses(newDiferenciaMeses);
    }
    if (diferenciaMeses && diferenciaMeses < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }, [fechaInicio, fechaFinal, diferenciaMeses]);

  // Calculos
  useEffect(() => {
    if (calculoActivo) {
      let total = renta * Number(meses);
      const comision = total * 0.02;
      const interesResult = interes / 12;
      const pagosObj = [];

      for (let i = 1; i <= meses; i++) {
        const calculo = total * interesResult;
        total = total - calculo;
        pagosObj.push({
          pago: total.toFixed(2),
        });
      }

      const adelantto = (total - comision).toFixed(2);
      setAdelantto(adelantto);
      setPagos(pagosObj);
    }
  }, [calculoActivo, meses, renta]);

  // Datos de todos los pagos acorde al excel
  console.log("pagos", pagos);

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
            onValueChange={(value) => setRenta(Number(value))}
            className={styles.calculatorInput}
          />
          <Paragraph size="medium">
            <b>Fecha de inicio del contrato de arrendamiento</b>
          </Paragraph>
          <input
            type="date"
            className={styles.calculatorInput}
            value={fechaInicio ? fechaInicio.toISOString().split("T")[0] : ""}
            onChange={(event) => setFechaInicio(new Date(event.target.value))}
          />
          <Paragraph size="medium">
            <b>Fecha de fin del contrato de arrendamiento</b>
          </Paragraph>
          <input
            type="date"
            className={styles.calculatorInput}
            onChange={(event) => setFechaFinal(new Date(event.target.value))}
          />
          <Paragraph size="medium">
            <b>¿Cuántos meses de Adelantto necesitas?</b>
          </Paragraph>

          <div className={styles.calculatorOptions}>
            {mesesOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                className={`${styles.calculatorOption} ${
                  option.isActive ? styles.active : ""
                }`}
                onClick={() => mesesHandler(option.name)}
                disabled={!calculoActivo}
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
            value={adelantto ? adelantto : 0}
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
