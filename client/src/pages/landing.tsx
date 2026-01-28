import { useEffect, useMemo, useState } from "react";
import { CheckCircle, ClipboardX, AlertTriangle, TrendingDown, MessageCircle, Wrench, BarChart3, Users, FileText, Star } from "lucide-react";

import heroDashboard from "@/assets/images/hero-dashboard.png";
import previewGrid from "@/assets/images/preview-grid.png";
import heroMainImage from "@assets/Notas_Fiscais_(1)_1769565934011.png";
import logoCandido from "@assets/logo_candido_1769545514098.jpg";
import logoRz from "@assets/R_1769551366605.png";

const WA_PHONE = "5567998085713";
const WA_MESSAGE = "Olá! Gostaria de saber mais sobre o ERP para oficinas.";
const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`;

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function WhatsAppButton({ variant, label, testId }: { variant: "primary" | "secondary"; label: string; testId: string }) {
  const className =
    variant === "primary"
      ? "btn-primary btn-transition inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-semibold shadow-soft"
      : "btn-secondary btn-transition inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-semibold";

  return (
    <a
      data-testid={testId}
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
      <span>{label}</span>
    </a>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 md:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div data-testid="text-sticky-title" className="truncate text-sm font-semibold text-foreground">
            Quer ver na prática?
          </div>
          <div data-testid="text-sticky-subtitle" className="truncate text-xs text-muted-foreground">
            Fale com um especialista no WhatsApp
          </div>
        </div>
        <a
          data-testid="button-sticky-whatsapp"
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-transition inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function SectionHeader({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {overline ? (
        <div
          data-testid="text-section-overline"
          className="text-xs font-semibold tracking-widest text-primary uppercase"
        >
          {overline}
        </div>
      ) : null}
      <h2 data-testid="text-section-title" className="text-display mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p data-testid="text-section-subtitle" className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[hsl(220_14%_96%/0.55)] to-[hsl(354_78%_54%/0.10)]">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <Container>
        <div className="relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-7">
            <FadeIn>
              <div
                data-testid="badge-hero"
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                Novo: fluxo mais rápido de OS e estoque
              </div>

              <h1
                data-testid="text-hero-title"
                className="text-display mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Gerencie sua oficina em um só lugar
              </h1>

              <p
                data-testid="text-hero-subtitle"
                className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
              >
                ERP completo para oficinas mecânicas e borracharias: controle ordens de serviço, estoque, vendas e financeiro de forma simples e profissional.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppButton variant="primary" label="Falar com Especialista" testId="button-hero-whatsapp" />
              </div>

              <div
                data-testid="text-hero-trust"
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4 border-r border-border pr-4 last:border-0 last:pr-0">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-foreground">4,8</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      306 avaliações no Google
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center">
                      <img src={logoCandido} alt="Logo Candido" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center">
                      <img src={logoRz} alt="Logo Rz" className="h-full w-full object-cover" />
                    </div>
                    {[1].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-[10px] font-bold text-white">
                      +3k
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Mais de <span className="text-primary font-bold">3.000 clientes</span> ativos
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={100}>
              <div
                data-testid="img-hero-mockup"
                className="noise-surface group relative mx-auto max-w-[420px] overflow-hidden rounded-2xl border border-border bg-white shadow-soft-xl lg:ml-auto lg:mr-0"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-red-50/60 opacity-70" />
                <img
                  data-testid="img-hero-dashboard"
                  src={heroMainImage}
                  alt="Mecânico usando o sistema"
                  className="btn-transition h-auto w-full origin-center rounded-2xl object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
              </div>
              <div data-testid="text-hero-caption" className="mt-4 text-center text-sm text-muted-foreground">
                Controle total na palma da sua mão
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PainPoints() {
  const items = useMemo(
    () => [
      {
        icon: ClipboardX,
        title: "Ordens de serviço em papel",
        desc: "Perde tempo, erra informação e fica sem histórico do cliente.",
      },
      {
        icon: AlertTriangle,
        title: "Estoque descontrolado",
        desc: "Compra peças repetidas ou perde venda por falta de item na hora.",
      },
      {
        icon: TrendingDown,
        title: "Dificuldade em cobrar",
        desc: "Sem previsão de caixa e sem relatório, o dinheiro some.",
      },
    ],
    [],
  );

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader overline="VOCÊ SE IDENTIFICA?" title="Cansado de perder vendas por falta de controle?" />

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`card-pain-${idx}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-[hsl(220_14%_96%/0.7)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </div>
                <div data-testid={`text-pain-title-${idx}`} className="text-lg font-semibold text-foreground">
                  {it.title}
                </div>
                <p data-testid={`text-pain-desc-${idx}`} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-200/20 blur-2xl" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function VideoTestimonial() {
  return (
    <section className="bg-[hsl(220_14%_96%/0.55)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader 
          overline="RESULTADOS REAIS" 
          title="Veja quem já transformaram sua oficina" 
          subtitle="Assista ao depoimento de quem usa o sistema no dia a dia e veja como ele pode ajudar o seu negócio."
        />
        
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-soft-xl">
            <iframe
              data-testid="iframe-youtube-testimonial"
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/G3n_bGrCYro"
              title="Depoimento do cliente"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-10 flex justify-center">
            <WhatsAppButton variant="primary" label="Quero resultados como esses" testId="button-video-whatsapp" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureRow({
  title,
  icon: Icon,
  description,
  bullets,
  image,
  reversed,
  id,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
  bullets: string[];
  image: string;
  reversed?: boolean;
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${reversed ? "" : ""}`}>
      <div className={reversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
        <div className="flex items-center gap-3">
          <Icon className="h-9 w-9 text-primary" strokeWidth={2.2} />
          <h3 data-testid={`text-feature-title-${id}`} className="text-display text-2xl font-semibold text-foreground lg:text-3xl">
            {title}
          </h3>
        </div>
        <p data-testid={`text-feature-desc-${id}`} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b, idx) => (
            <li key={b} data-testid={`row-feature-bullet-${id}-${idx}`} className="flex items-start gap-3 text-sm text-foreground/90 sm:text-base">
              <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-500" strokeWidth={2.25} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={reversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
        <div
          data-testid={`img-feature-${id}`}
          className="noise-surface group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1"
        >
          <img src={image} alt="Preview do ERP" className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = useMemo(
    () => [
      {
        id: "os",
        icon: Wrench,
        title: "Ordens de Serviço Digitais",
        description: "Crie e acompanhe serviços com status, responsáveis e histórico. Tudo padronizado, sem papel.",
        bullets: ["Status por etapa (aberta, em execução, finalizada)", "Histórico por cliente e veículo", "Impressão e compartilhamento fáceis"],
        image: heroDashboard,
      },
      {
        id: "estoque",
        icon: BarChart3,
        title: "Estoque com alerta de baixo nível",
        description: "Evite perder venda. Saiba o que está acabando e reponha com antecedência.",
        bullets: ["Alertas de itens em baixa", "Movimentação de entrada e saída", "Relatório rápido por categoria"],
        image: previewGrid,
        reversed: true,
      },
      {
        id: "clientes",
        icon: Users,
        title: "Cadastro de clientes e veículos",
        description: "Aumente a recorrência com atendimento rápido. Tenha tudo na mão quando o cliente voltar.",
        bullets: ["Histórico de serviços", "Anotações e lembretes", "Dados organizados para orçamentos"],
        image: heroDashboard,
      },
      {
        id: "financeiro",
        icon: FileText,
        title: "Financeiro simples (e que fecha)",
        description: "Veja entradas, saídas e contas a receber em um painel claro. Mais previsibilidade, menos surpresa.",
        bullets: ["Fluxo de caixa por período", "Controle de pagamentos e recebimentos", "Relatório para tomada de decisão"],
        image: previewGrid,
        reversed: true,
      },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(220_14%_96%/0.75)] to-white py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 diagonal-lines opacity-60" />
      <Container>
        <SectionHeader
          title="Tudo que você precisa em um só sistema"
          subtitle="Um fluxo pensado para oficina: menos retrabalho, mais visibilidade e atendimento mais rápido."
        />

        <div className="relative mt-16 space-y-16 lg:space-y-20">
          {features.map((f, idx) => (
            <FadeIn key={f.id} delay={idx * 80}>
              <FeatureRow {...f} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Demo() {
  const [active, setActive] = useState(0);

  const tabs = useMemo(
    () => [
      { label: "Dashboard", img: heroDashboard },
      { label: "OS & Status", img: previewGrid },
      { label: "Estoque", img: heroDashboard },
    ],
    [],
  );

  useEffect(() => {
    const id = window.setInterval(() => setActive((a) => (a + 1) % tabs.length), 5500);
    return () => window.clearInterval(id);
  }, [tabs.length]);

  return (
    <section id="demo" className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader title="Veja como é simples usar" />

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((t, idx) => (
              <button
                key={t.label}
                data-testid={`button-demo-tab-${idx}`}
                onClick={() => setActive(idx)}
                className={`btn-transition rounded-full px-4 py-2 text-sm font-semibold ${
                  idx === active
                    ? "bg-red-600 text-white shadow-soft"
                    : "border border-border bg-white text-foreground hover:bg-[hsl(220_14%_96%/0.8)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="noise-surface mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-soft-xl">
            <img
              data-testid="img-demo-main"
              src={tabs[active]?.img}
              alt="Preview do sistema"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton variant="primary" label="Quero ver na prática — Falar no WhatsApp" testId="button-demo-whatsapp" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Benefits() {
  const stats = useMemo(
    () => [
      { num: "3x", label: "Mais produtividade" },
      { num: "-50%", label: "Menos retrabalho" },
      { num: "90%", label: "Mais visibilidade" },
      { num: "24h", label: "Implantação guiada" },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-14 sm:py-16 lg:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60 dot-grid" />
      <Container>
        <SectionHeader title="Resultados que você vai alcançar" />

        <div className="relative mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              data-testid={`card-stat-${idx}`}
              className="glass rounded-xl p-5 text-center text-white shadow-none"
              style={{ backgroundColor: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.18)" }}
            >
              <div data-testid={`text-stat-num-${idx}`} className="text-display text-4xl font-bold sm:text-5xl lg:text-6xl">
                {s.num}
              </div>
              <div data-testid={`text-stat-label-${idx}`} className="mt-2 text-base text-red-100 sm:text-lg">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton variant="secondary" label="Falar no WhatsApp" testId="button-benefits-whatsapp" />
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = useMemo(
    () => [
      {
        quote:
          "Antes eu perdia horas organizando papéis. Agora tudo fica registrado automaticamente e consigo focar no que importa: atender bem meus clientes.",
        name: "Carlos M.",
        biz: "Oficina Nova Força",
        loc: "Campo Grande - MS",
      },
      {
        quote:
          "O estoque era um caos. Hoje eu sei exatamente o que comprar e quando. Parou de faltar peça e minhas vendas subiram.",
        name: "Renata S.",
        biz: "Borracharia Central",
        loc: "Dourados - MS",
      },
      {
        quote:
          "O financeiro finalmente fecha. Com os relatórios eu consigo decidir melhor e não fico no escuro.",
        name: "João P.",
        biz: "Auto Service JP",
        loc: "Três Lagoas - MS",
      },
    ],
    [],
  );

  return (
    <section className="bg-[hsl(220_14%_96%/0.55)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader title="Oficinas que já transformaram sua gestão" subtitle="Depoimentos reais (exemplos) para mostrar o tipo de resultado que você pode esperar." />

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, idx) => (
            <div
              key={t.name}
              data-testid={`card-testimonial-${idx}`}
              className="noise-surface rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <p data-testid={`text-testimonial-quote-${idx}`} className="text-sm leading-relaxed text-foreground/85 italic">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  data-testid={`img-testimonial-avatar-${idx}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-700"
                >
                  <span className="text-sm font-bold">{t.name.split(" ")[0]?.[0]}</span>
                </div>
                <div className="min-w-0">
                  <div data-testid={`text-testimonial-name-${idx}`} className="truncate text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div data-testid={`text-testimonial-biz-${idx}`} className="truncate text-xs text-muted-foreground">
                    {t.biz} — {t.loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton variant="primary" label="Falar com Especialista" testId="button-testimonials-whatsapp" />
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div data-testid="text-footer-title" className="text-display text-2xl font-semibold">
              ERP para Oficinas e Borracharias
            </div>
            <p data-testid="text-footer-subtitle" className="mt-2 max-w-2xl text-sm text-white/75">
              Uma landing page de alta conversão focada em gerar leads no WhatsApp.
            </p>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <WhatsAppButton variant="primary" label="Falar no WhatsApp" testId="button-footer-whatsapp" />
          </div>
        </div>
        <div data-testid="text-footer-legal" className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} — Demonstração de layout.
        </div>
      </Container>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen w-full">
      <StickyMobileCTA />
      <Hero />
      <PainPoints />
      <VideoTestimonial />
      <Features />
      <Demo />
      <Benefits />
      <Testimonials />
      <Footer />
      <div className="h-20 md:hidden" />
    </div>
  );
}
