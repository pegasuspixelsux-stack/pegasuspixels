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
        "Inventario digital disperso y difícil de actualizar",
        "Falta de herramientas de comparación y configuración de vehículos",
        "Procesos de ventas y comisiones gestionados en planillas sin visibilidad",
      ]}
      solutions={[
        "Plataforma de inventario digital con actualizaciones en tiempo real",
        "Configurador de vehículos interactivo con opciones y precios",
        "Dashboard de pipeline de ventas con seguimiento de comisiones",
      ]}
      benefits={[
        "Reducción del tiempo de gestión de inventario en un 60%",
        "Mayor engagement del cliente antes de la visita al showroom",
        "Visibilidad completa del pipeline para gerentes y vendedores",
      ]}
      ctaLabel="Solicitar Consulta"
      showArrow
    />
  );
}
