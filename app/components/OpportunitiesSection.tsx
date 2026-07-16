import ProblemCards from "./ProblemCards";

const problemCards = [
  { title: "Sitio Web Desactualizado", desc: "Tu sitio web ya no genera confianza." },
  { title: "Mala Experiencia de Usuario", desc: "Los visitantes no encuentran rápido lo que necesitan." },
  { title: "Oportunidades Perdidas", desc: "Las consultas de los clientes se pierden en conversaciones de WhatsApp." },
  { title: "Sin Seguimiento", desc: "Los clientes potenciales nunca reciben un seguimiento constante." },
];

export default function OpportunitiesSection({
  bg = "#000000",
  text = "#FFFFFF",
}: {
  bg?: string;
  text?: string;
}) {
  return (
    <section style={{ backgroundColor: bg, color: text }} className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="m-0 mb-12 max-w-[640px] text-[28px] font-bold tracking-[-0.01em] md:text-[34px]">
          La mayoría de los negocios pierden oportunidades porque...
        </h2>
        <ProblemCards cards={problemCards} />
      </div>
    </section>
  );
}
