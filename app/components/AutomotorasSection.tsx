import IndustryDetail from "./IndustryDetail";

export default function AutomotorasSection({
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
      category="Automotoras y Concesionarias"
      intro="Los compradores de vehículos de alta gama investigan digitalmente antes de visitar el showroom. Su presencia digital debe transmitir la misma excelencia que su flota."
      challenges={[
        "Publicación manual de vehículos en múltiples plataformas.",
        "Consultas y oportunidades sin un seguimiento organizado.",
        "Procesos comerciales dispersos que dificultan el trabajo del equipo de ventas.",
      ]}
      solutions={[
        "Plataforma para publicar y administrar el inventario de vehículos desde un solo lugar.",
        "Gestión de leads con seguimiento del proceso comercial, asignación de vendedores y registro de cada interacción.",
        "Herramientas para organizar consultas, destacar vehículos y optimizar la gestión de ventas.",
      ]}
      benefits={[
        "Mayor captación de clientes potenciales desde canales digitales.",
        "Seguimiento más eficiente que incrementa las oportunidades de cierre.",
        "Un proceso comercial más organizado, con mejor control del inventario y del desempeño del equipo de ventas.",
      ]}
      ctaLabel="Solicitar Consulta"
      showArrow
    />
  );
}
