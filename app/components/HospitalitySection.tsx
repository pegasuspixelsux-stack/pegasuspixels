import IndustryDetail from "./IndustryDetail";

export default function HospitalitySection({
  bg,
  text,
  muted,
}: {
  bg?: string;
  text?: string;
  muted?: string;
}) {
  return (
    <IndustryDetail
      bg={bg}
      text={text}
      muted={muted}
      category="Hospitality"
      intro="En restaurantes, hoteles y experiencias gastronómicas de alto nivel, el servicio comienza antes de que el cliente llegue. Su presencia digital es la primera impresión."
      challenges={[
        "Sistemas de reserva desconectados de la operación del negocio",
        "Menús digitales estáticos que no reflejan la identidad de marca",
        "Falta de herramientas de fidelización y gestión de eventos privados",
      ]}
      solutions={[
        "Sistema de reservas online integrado con gestión de mesas y turnos",
        "Menú digital interactivo con identidad visual de alta estética",
        "Programa de fidelización y portal para gestión de eventos privados",
      ]}
      benefits={[
        "Reducción de no-shows con confirmaciones y recordatorios automatizados",
        "Experiencia digital coherente con la propuesta gastronómica premium",
        "Mayor captación de eventos corporativos y celebraciones privadas",
      ]}
      ctaLabel="Solicitar Consulta"
    />
  );
}
