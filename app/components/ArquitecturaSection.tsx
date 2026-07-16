import IndustryDetail from "./IndustryDetail";

export default function ArquitecturaSection({
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
      category="Arquitectura y Construcción"
      intro="Los estudios de arquitectura de alto nivel merecen una presencia digital que transmita la misma precisión y visión que sus proyectos más emblemáticos."
      challenges={[
        "Portfolio digital que no refleja la calidad y escala de los proyectos",
        "Procesos de presentación a clientes manuales y poco profesionales",
        "Falta de herramientas de seguimiento de obra y comunicación con equipos",
      ]}
      solutions={[
        "Portfolio interactivo de proyectos con visualizaciones de alta resolución",
        "Herramienta de presentación a clientes con fichas técnicas y renders",
        "Sistema de gestión de proyectos con seguimiento de hitos y comunicación",
      ]}
      benefits={[
        "Mayor captación de proyectos de alto valor a través del portfolio digital",
        "Presentaciones más efectivas que acortan los ciclos de aprobación",
        "Mejor coordinación entre arquitectos, constructores y clientes",
      ]}
      ctaLabel="Solicitar Consulta"
    />
  );
}
