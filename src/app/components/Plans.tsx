import React from "react";
import Card from "./UI/Card";

const Plans = () => {
  return (
    <section id="plans" className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-16">
      <Card
        title="Plan Mensual"
        options={[
          "Plan nutricional",
          "Rutina de entrenamiento personalizada",
          "Revisiones semanales",
          "Contacto directo a través de Whatsapp",
          "Asesoramiento de suplementación deportiva",
          "1 videollamada cada 15 días",
          "Revisión de la ejecución de los ejercicios mediante videos",
        ]}
      />
      <Card
        title="Plan trimestral"
        options={[
          "Plan nutricional",
          "Rutina de entrenamiento personalizada",
          "Revisiones semanales",
          "Contacto directo a través de Whatsapp",
          "Asesoramiento de suplementación deportiva",
          "1 videollamada cada 15 días",
          "Revisión de la ejecución de los ejercicios mediante videos",
        ]}
      />
      <Card
        title="Plan Semetral"
        options={[
          "Plan nutricional",
          "Rutina de entrenamiento personalizada",
          "Revisiones semanales",
          "Contacto directo a través de Whatsapp",
          "Asesoramiento de suplementación deportiva",
          "1 videollamada cada 15 días",
          "Revisión de la ejecución de los ejercicios mediante videos",
        ]}
      />
      <Card
        title="Plan Anual"
        options={[
          "Plan nutricional",
          "Rutina de entrenamiento personalizada",
          "Revisiones semanales",
          "Contacto directo a través de Whatsapp",
          "Asesoramiento de suplementación deportiva",
          "1 videollamada cada 15 días",
          "Revisión de la ejecución de los ejercicios mediante videos",
        ]}
      />
    </section>
  );
};

export default Plans;
