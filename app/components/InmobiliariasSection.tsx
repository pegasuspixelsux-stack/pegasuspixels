import IndustryDetail from "./IndustryDetail";

export default function InmobiliariasSection({
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
      category="Inmobiliarias"
      intro="El mercado inmobiliario de alta gama exige presencias digitales que estén a la altura de cada propiedad. Un portal desactualizado no vende propiedades de lujo."
      challenges={[
        "Portales web desactualizados que no reflejan el valor de las propiedades",
        "Gestión manual de leads sin seguimiento sistemático",
        "Falta de herramientas de visualización premium para compradores remotos",
      ]}
      solutions={[
        "Portal de propiedades a medida con filtros avanzados y galería de alta calidad",
        "CRM integrado para seguimiento de leads y automatización de comunicaciones",
        "Tours virtuales y visualizaciones inmersivas para decisiones de compra remotas",
      ]}
      benefits={[
        "Mayor captación de leads calificados desde canales digitales",
        "Ciclos de venta más cortos con mejor información al cliente",
        "Imagen de marca coherente con el posicionamiento premium de cada propiedad",
      ]}
      ctaLabel="Solicitar Consulta"
    />
  );
}
