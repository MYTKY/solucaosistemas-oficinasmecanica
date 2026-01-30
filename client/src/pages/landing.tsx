import { useEffect, useMemo, useState } from "react";
import { CheckCircle, ClipboardX, AlertTriangle, TrendingDown, MessageCircle, Wrench, BarChart3, Users, FileText, Star } from "lucide-react";

import heroDashboard from "@/assets/images/hero-dashboard.png";
import previewGrid from "@/assets/images/preview-grid.png";
import heroMainImage from "@assets/Notas_Fiscais_(2)_1769567743794.png";
import logoCandido from "@assets/logo_candido_1769545514098.jpg";
import logoRz from "@assets/R_1769551366605.png";
import logoCompany from "@assets/image_1769577733120.png";
import imgSupport from "@assets/suporte_1769578594496.png";
import logoRzAlt from "@assets/R_1769582818166.png";
import avatarCarlos from "@assets/R_(1)_1769583470914.png";
import avatarJoao from "@assets/R_(2)_1769584109331.png";

const WA_PHONE = "5567998085713";
const WA_MESSAGE = "Olá! Gostaria de saber mais sobre o ERP para oficinas.";
const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_MESSAGE}`;

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function WhatsAppButton({ variant, label, testId, onClick }: { variant: "primary" | "secondary"; label: string; testId: string; onClick?: () => void }) {
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
      onClick={onClick}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
      <span>{label}</span>
    </a>
  );
}

function StickyMobileCTA() {
  const handleWhatsAppClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Conversion",
        event_label: label,
      });
    }
  };

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
          onClick={() => handleWhatsAppClick("Sticky Mobile")}
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
        <p data-testid="text-section-subtitle" className="mt-4 text-muted-foreground sm:text-lg text-[17px]">
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

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Dores", href: "#dores" },
    { label: "Recursos", href: "#recursos" },
    { label: "Suporte", href: "#suporte" },
    { label: "Resultados", href: "#resultados" },
  ];

  const handleWhatsAppClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Conversion",
        event_label: label,
      });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white/80 py-3 shadow-md backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="http://www.sucessonaempresa.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src={logoCompany} alt="Solução Sistemas" className="h-10 w-auto object-contain" />
            </a>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton 
              variant="primary" 
              label="Falar com Especialista" 
              testId="button-nav-whatsapp" 
              onClick={() => handleWhatsAppClick("Nav Desktop")}
            />
          </div>

          <div className="flex md:hidden">
             <WhatsAppButton 
               variant="primary" 
               label="Falar agora" 
               testId="button-nav-mobile-whatsapp" 
               onClick={() => handleWhatsAppClick("Nav Mobile")}
             />
          </div>
        </div>
      </Container>
    </nav>
  );
}

function Hero() {
  const handleWhatsAppClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "Conversion",
        event_label: label,
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#ffffff] pt-20">
      <Container>
        <div className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-24 lg:py-24">
          <div className="lg:col-span-12 xl:col-span-6">
            <FadeIn>
              <div
                data-testid="badge-hero"
                className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/50 px-4 py-2 text-sm font-semibold text-red-700 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Novo: fluxo mais rápido de OS e estoque
              </div>

              <h1
                data-testid="text-hero-title"
                className="mt-8 font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl lg:leading-[1.15] text-[48px]"
              >
                Gerencie sua oficina em um só lugar
              </h1>

              <p
                data-testid="text-hero-subtitle"
                className="mt-6 max-w-xl text-slate-600 sm:text-lg lg:text-lg text-[16px] leading-relaxed"
              >
                ERP completo para oficinas mecânicas e borracharias: controle ordens de serviço, estoque, vendas e financeiro de forma simples e profissional.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton 
                  variant="primary" 
                  label="Falar com Especialista" 
                  testId="button-hero-whatsapp" 
                  onClick={() => handleWhatsAppClick("Hero")}
                />
              </div>

              <div
                data-testid="text-hero-trust"
                className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center"
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

          <div className="lg:col-span-12 xl:col-span-6 lg:mt-12 xl:mt-0 flex justify-center">
            <FadeIn delay={100}>
              <div
                data-testid="img-hero-mockup"
                className="group relative w-full max-w-5xl xl:ml-auto xl:mr-0"
              >
                <img
                  data-testid="img-hero-dashboard"
                  src={heroMainImage}
                  alt="Mecânico usando o sistema"
                  className="h-auto w-full origin-center object-contain scale-[1.1] sm:scale-[1.3] mt-8 sm:mt-0"
                />
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
    <section id="dores" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Coluna da Esquerda: Fixa */}
          <div className="lg:sticky lg:top-32 w-full lg:w-1/2">
            <div className="text-left">
              <div
                data-testid="text-section-overline"
                className="text-xs font-semibold tracking-widest text-primary uppercase"
              >
                VOCÊ SE IDENTIFICA?
              </div>
              <h2 data-testid="text-section-title" className="text-display mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Cansado de perder vendas por falta de controle?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Muitas oficinas ainda operam de forma arcaica, perdendo tempo e dinheiro em processos manuais que poderiam ser automatizados.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Rola com sobreposição */}
          <div className="w-full lg:w-1/2 space-y-24 lg:space-y-32 pb-32">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  data-testid={`card-pain-${idx}`}
                  className="sticky top-48 group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl"
                  style={{ 
                    zIndex: idx + 1 
                  }}
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-inner">
                    <Icon className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <h3 data-testid={`text-pain-title-${idx}`} className="text-2xl font-bold text-slate-900">
                    {it.title}
                  </h3>
                  <p data-testid={`text-pain-desc-${idx}`} className="mt-4 text-lg leading-relaxed text-slate-600">
                    {it.desc}
                  </p>
                  
                  {/* Decorative number */}
                  <div className="absolute top-8 right-8 text-6xl font-black text-slate-100 select-none -z-10 group-hover:text-red-50/50 transition-colors">
                    0{idx + 1}
                  </div>
                  
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-colors" />
                </div>
              );
            })}
          </div>
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
          title="Veja quem já transformou sua empresa" 
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
            <WhatsAppButton 
              variant="primary" 
              label="Quero resultados como esses" 
              testId="button-video-whatsapp" 
              onClick={() => handleWhatsAppClick("Video Testimonial")}
            />
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
        bullets: ["Histórico por cliente e veículo", "Impressão e compartilhamento fáceis"],
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
    <section id="recursos" className="relative overflow-hidden bg-gradient-to-br from-[hsl(220_14%_96%/0.75)] to-white py-14 sm:py-16 lg:py-24">
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

function Support() {
  const points = [
    {
      id: 1,
      title: "Atendimento Especializado",
      desc: "Não somos robôs. Nossa equipe é formada por consultores reais que entendem de gestão.",
    },
    {
      id: 2,
      title: "Migração Sem Dor de Cabeça",
      desc: "Trazemos seus dados do sistema antigo.",
    },
    {
      id: 3,
      title: "Treinamento Contínuo",
      desc: "Acesso ilimitado à nossa universidade corporativa para treinar sua equipe.",
    },
  ];

  return (
    <section id="suporte" className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={imgSupport}
                alt="Equipe de Suporte Solução Sistemas"
                className="h-auto w-full object-cover lg:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-[#0F172A] sm:text-4xl">98%</div>
                    <div>
                      <div className="text-sm font-bold text-emerald-600 sm:text-base">Satisfação</div>
                      <div className="text-[10px] leading-tight text-muted-foreground sm:text-xs font-medium">
                        Dos nossos clientes relatam aumento imediato na produtividade.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-display text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Suporte que entende o seu negócio
            </h2>
            <div className="mt-10 space-y-8">
              {points.map((p) => (
                <div key={p.id} className="flex gap-5 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-sm font-bold text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-300">
                    {p.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#E63946] transition-colors duration-300">{p.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <WhatsAppButton 
                variant="primary" 
                label="Falar com Especialista" 
                testId="button-support-whatsapp" 
                onClick={() => handleWhatsAppClick("Support Section")}
              />
            </div>
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
    ],
    [],
  );

  return (
    <section id="resultados" className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-14 sm:py-16 lg:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60 dot-grid" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-testid="text-section-title" className="text-display mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Resultados que você pode alcançar</h2>
        </div>

        <div className="relative mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              data-testid={`card-stat-${idx}`}
              className="glass min-w-[160px] flex-1 rounded-xl p-5 text-center text-white shadow-none sm:min-w-[200px] lg:max-w-[280px]"
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
          <WhatsAppButton 
            variant="secondary" 
            label="Falar no WhatsApp" 
            testId="button-benefits-whatsapp" 
            onClick={() => handleWhatsAppClick("Benefits")}
          />
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
        avatar: avatarCarlos,
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
        avatar: avatarJoao,
      },
    ],
    [],
  );

  return (
    <section className="bg-[hsl(220_14%_96%/0.55)] py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionHeader title="Oficinas que já transformaram sua gestão" />

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, idx) => (
            <div
              key={t.name}
              data-testid={`card-testimonial-${idx}`}
              className="noise-surface rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p data-testid={`text-testimonial-quote-${idx}`} className="text-sm leading-relaxed text-foreground/85 italic">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  data-testid={`img-testimonial-avatar-${idx}`}
                  className="h-12 w-12 rounded-full border border-border overflow-hidden bg-white flex items-center justify-center"
                >
                  <img src={t.avatar || logoRzAlt} alt={t.name} className="h-full w-full object-cover" />
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
          <WhatsAppButton 
            variant="primary" 
            label="Falar com Especialista" 
            testId="button-testimonials-whatsapp" 
            onClick={() => handleWhatsAppClick("Testimonials")}
          />
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-white/5 bg-[#0F172A] pt-16 pb-8 text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-xl">
                <img src={logoCompany} alt="Solução Sistemas" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight text-white">
                  Solução <span className="text-red-500">Sistemas</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                  Tecnologia Automotiva
                </div>
              </div>
            </div>
            
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
              Transformando a gestão de oficinas e borracharias com tecnologia simples, robusta e focada em resultados reais.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-white">4.8/5 no Google</div>
                <div className="text-white/40 text-xs">Baseado em +300 avaliações</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="mt-6 space-y-4">
              {["Dores", "Recursos", "Suporte", "Resultados"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-red-500 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Pronto para começar?</h4>
              <p className="mt-2 text-sm text-white/60">Agende uma demonstração gratuita agora mesmo.</p>
              <div className="mt-6">
                <WhatsAppButton 
                  variant="primary" 
                  label="Chamar no WhatsApp" 
                  testId="button-footer-whatsapp-pro" 
                  onClick={() => handleWhatsAppClick("Footer")}
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-white/40 justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Atendimento online agora
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/40 font-medium">
            © {currentYear} Solução Sistemas. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Termos</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen w-full">
      <Nav />
      <StickyMobileCTA />
      <Hero />
      <PainPoints />
      <VideoTestimonial />
      <Features />
      <Support />
      <Benefits />
      <Testimonials />
      <Footer />
      <div className="h-20 md:hidden" />
    </div>
  );
}
