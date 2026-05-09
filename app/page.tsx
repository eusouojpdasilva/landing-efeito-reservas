"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

const WHATSAPP_GROUP_INVITE_URL =
  "https://chat.whatsapp.com/COLE_O_LINK_AQUI";

type ToastState = {
  title: string;
  description?: string;
};

function SectionGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-amber-400/22 blur-[100px]"
    />
  );
}

function TechGrid({
  subtle = false,
  className = "",
}: {
  subtle?: boolean;
  className?: string;
}) {
  const opacity = subtle ? "opacity-[0.11]" : "opacity-[0.17]";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:72px_72px] md:bg-[length:88px_88px] ${opacity} ${className}`}
    />
  );
}

function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: delayMs / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

const UNDERSTAND_ITEMS = [
  "Como organizar o Instagram para gerar conversas mais qualificadas",
  "Como estruturar o WhatsApp para parar de perder leads",
  "Como usar IA para acelerar conteúdo e atendimento",
  "Como transformar atendimento solto em um sistema simples",
  "Como estou aplicando isso na prática dentro da Nattiva Travel",
] as const;

const FOR_WHO_ITEMS = [
  "Já vendem, mas vivem no improviso",
  "Sentem que trabalham muito e não conseguem prever o próximo mês",
  "Querem mais clareza operacional",
  "Querem parar de depender só de indicação",
  "Querem organizar o negócio antes de crescer",
] as const;

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [toast, setToast] = useState<ToastState | null>(null);
  const [joining, setJoining] = useState(false);

  const isPlaceholderInvite = useMemo(() => {
    return WHATSAPP_GROUP_INVITE_URL.includes("COLE_O_LINK");
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 5200);
    return () => window.clearTimeout(t);
  }, [toast]);

  const handleJoinVip = () => {
    if (joining) return;
    setJoining(true);

    if (isPlaceholderInvite) {
      setToast({
        title: "Defina o link do grupo VIP",
        description:
          "Troque `WHATSAPP_GROUP_INVITE_URL` no `app/page.tsx` pelo link do seu grupo.",
      });
      setJoining(false);
      return;
    }

    window.open(WHATSAPP_GROUP_INVITE_URL, "_blank", "noopener,noreferrer");
    setToast({
      title: "Abrindo o WhatsApp...",
      description: "Se a janela não abrir, verifique o link do grupo VIP.",
    });

    window.setTimeout(() => setJoining(false), reduceMotion ? 0 : 900);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0a0f] text-zinc-50">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_75%_at_50%_-18%,rgba(251,191,36,0.32),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(251,146,60,0.14),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_55%,rgba(245,158,11,0.10),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,15,0)_0%,rgba(5,5,8,0.65)_100%)]" />
      </div>

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100]"
      >
        Pular para o conteúdo
      </a>

      <main
        id="conteudo"
        className="relative z-10 flex flex-col border-t border-white/[0.08] bg-[#0a0a0f]/95"
      >
        {/* Hero */}
        <section
          aria-label="Hero"
          className="relative min-h-[min(92vh,56rem)] overflow-hidden border-b border-white/[0.08] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-14 md:px-10 lg:pb-28 lg:pt-20"
        >
          <TechGrid />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <SectionGlow />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/70 to-transparent"
          />

          <div className="relative mx-auto flex max-w-6xl flex-col lg:min-h-[70vh] lg:flex-row lg:items-stretch lg:gap-12">
            <div className="flex flex-1 flex-col justify-center">
              <Reveal delayMs={0}>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm">
                  Reunião estratégica
                </div>
              </Reveal>

              <Reveal delayMs={40}>
                <h1 className="mt-6 max-w-4xl text-[clamp(2rem,7vw,3.95rem)] font-bold leading-[0.95] tracking-[-0.04em] sm:leading-[0.93]">
                  <span className="block bg-gradient-to-b from-white via-zinc-50 to-zinc-200 bg-clip-text text-transparent">
                    SALA ESTRATÉGICA
                  </span>
                  <span className="mt-2 block bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                    EFEITO RESERVAS #01
                  </span>
                </h1>
              </Reveal>

              <Reveal delayMs={80}>
                <p className="mt-8 max-w-2xl text-[1.125rem] leading-relaxed text-zinc-200 sm:text-[1.25rem] sm:leading-[1.65] md:text-[1.35rem]">
                  Como agentes de viagens estão organizando Instagram, WhatsApp
                  e atendimento para gerar reservas com mais previsibilidade
                  usando IA.
                </p>
              </Reveal>

              <Reveal delayMs={120}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2.5 rounded-2xl border border-zinc-600/70 bg-zinc-900/95 px-5 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(251,191,36,0.18)] sm:text-base">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.75)]" />
                    Dia 27/05 • Ao vivo e gratuito
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal
              delayMs={100}
              className="relative mt-10 flex flex-1 flex-col justify-center lg:mt-0 lg:max-w-md"
            >
              <div className="relative overflow-hidden rounded-2xl border border-zinc-500/40 bg-gradient-to-br from-zinc-800/95 via-zinc-900/95 to-[#0d0d14] p-6 shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(251,191,36,0.15)] backdrop-blur-md sm:p-8">
                <TechGrid subtle className="rounded-2xl" />
                <div className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-amber-400/25 blur-3xl" />
                <p className="relative text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Efeito Reservas
                </p>
                <blockquote className="relative mt-5 border-l-2 border-amber-400/70 pl-5 text-[1.02rem] leading-[1.65] text-zinc-200 sm:text-[1.08rem]">
                  <p className="text-zinc-100">
                    Não é uma aula técnica sobre ferramentas.
                  </p>
                  <p className="mt-3 text-zinc-100">
                    É uma conversa estratégica sobre estrutura, previsibilidade
                    e operação no turismo.
                  </p>
                </blockquote>
                <div className="relative mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Quando
                    </p>
                    <p className="text-base font-bold text-white">Dia 27/05</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Formato
                    </p>
                    <p className="text-base font-bold text-white">
                      Ao vivo e gratuito
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Problema */}
        <Reveal>
          <section
            aria-label="O problema invisível"
            className="relative overflow-hidden border-b border-white/[0.07] px-5 py-20 sm:px-8 md:py-24 lg:py-28"
          >
            <div className="absolute inset-0 bg-[#0e0e16]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(251,191,36,0.11)_0%,transparent_48%)]" />
            <TechGrid subtle />
            <div className="relative mx-auto max-w-6xl">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-2xl text-[1.875rem] font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                  O problema invisível
                </h2>
                <p className="max-w-xs text-right text-[13px] font-semibold uppercase tracking-[0.22em] text-amber-300 md:text-sm">
                  #01
                </p>
              </div>
              <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5 md:border-r md:border-white/10 md:pr-12">
                  <p className="text-[1.35rem] font-semibold leading-snug text-white sm:text-2xl md:text-[1.65rem]">
                    Seu problema provavelmente não é falta de esforço.
                  </p>
                  <p className="mt-5 text-[1.35rem] font-semibold leading-snug text-amber-200 sm:text-2xl md:text-[1.65rem]">
                    É falta de estrutura.
                  </p>
                </div>
                <div className="space-y-7 text-[1.08rem] leading-[1.75] text-zinc-200 md:col-span-7 md:text-[1.12rem]">
                  <p>
                    Tem agente respondendo WhatsApp o dia inteiro, criando
                    conteúdo toda semana e mesmo assim sem previsibilidade.
                  </p>
                  <div className="rounded-2xl border border-white/[0.12] bg-zinc-900/85 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <p className="text-zinc-100">
                      O Instagram não gera conversas qualificadas.
                      <br />
                      O atendimento depende totalmente da agente.
                      <br />
                      Os leads chegam desorganizados.
                      <br />
                      O mês vira uma sequência de improvisos.
                    </p>
                  </div>
                  <p className="text-zinc-100">
                    E o pior:
                    <br />
                    muitas já conhecem ferramentas de IA, mas continuam operando
                    da mesma forma.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* O que será mostrado */}
        <Reveal>
          <section
            aria-label="O que será mostrado"
            className="relative overflow-hidden border-b border-white/[0.07] px-5 py-20 sm:px-8 md:py-24 lg:py-28"
          >
            <SectionGlow />
            <div className="absolute inset-0 bg-[#08080f]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(251,191,36,0.14),transparent_55%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/55 to-transparent" />
            <TechGrid />

            <div className="relative mx-auto max-w-6xl">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-amber-400/25 pb-10">
                <h2 className="text-[1.875rem] font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                  O que será mostrado
                </h2>
                <span className="rounded-xl border border-amber-400/45 bg-amber-500/[0.15] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:text-xs">
                  Ao vivo · #01
                </span>
              </div>

              <p className="mx-auto mt-12 max-w-3xl text-center text-[1.12rem] leading-[1.65] text-zinc-100 sm:text-[1.2rem] sm:leading-[1.7] md:text-[1.28rem]">
                Nessa reunião estratégica eu vou mostrar como estou estruturando
                uma operação de conteúdo, atendimento e reservas usando IA
                aplicada ao turismo.
              </p>

              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-amber-400/35 bg-gradient-to-b from-amber-500/[0.14] to-zinc-950/40 p-7 text-center shadow-[0_22px_60px_-28px_rgba(251,191,36,0.35)]">
                <p className="text-[1.06rem] leading-[1.65] text-zinc-50 sm:text-[1.12rem]">
                  Sem promessas irreais.
                  <br />
                  Sem automações complexas.
                  <br />
                  Sem precisar virar especialista em tecnologia.
                </p>
              </div>

              <p className="mt-14 text-center text-[13px] font-bold uppercase tracking-[0.28em] text-amber-200/90">
                Você vai entender
              </p>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {UNDERSTAND_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-zinc-800/60 to-zinc-950/90 p-6 shadow-[0_22px_55px_-28px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:shadow-[0_26px_60px_-24px_rgba(251,191,36,0.22)]"
                  >
                    <span className="absolute right-4 top-4 h-1 w-10 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-300/55 to-amber-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="mb-4 inline-block h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.65)]" />
                    <p className="text-[1.02rem] font-medium leading-[1.55] text-zinc-50 sm:text-[1.06rem]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Benefícios — copy de “Para quem é” */}
        <Reveal>
          <section
            aria-label="Benefícios"
            className="relative overflow-hidden border-b border-white/[0.07] px-5 py-20 sm:px-8 md:py-24 lg:py-28"
          >
            <div className="absolute inset-0 bg-[#0d0d14]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_100%,rgba(251,191,36,0.16),transparent_58%)]" />
            <TechGrid subtle />

            <div className="relative mx-auto max-w-6xl">
              <h2 className="max-w-3xl text-[1.875rem] font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                Benefícios
              </h2>
              <p className="mt-5 max-w-2xl text-[1.12rem] leading-[1.65] text-zinc-200 sm:text-[1.2rem]">
                Essa reunião é para agentes de viagens que:
              </p>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {FOR_WHO_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    className="relative flex gap-5 overflow-hidden rounded-2xl border border-white/[0.11] bg-[linear-gradient(155deg,rgba(30,30,38,0.95),rgba(10,10,14,0.98))] p-7 shadow-[0_26px_60px_-28px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-500/[0.18] text-[15px] font-black text-amber-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                    <p className="pt-2 text-[1.06rem] font-medium leading-[1.6] text-zinc-100 sm:text-[1.1rem]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA premium */}
        <Reveal>
          <section
            aria-label="CTA premium"
            className="relative overflow-hidden border-b border-white/[0.07] px-5 py-20 sm:px-8 md:py-28"
          >
            <div className="absolute inset-0 bg-[#090912]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(251,191,36,0.34),transparent_48%)]" />
            <div className="absolute inset-x-10 top-[42%] h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-amber-300">
                CTA premium
              </p>
              <h2 className="mt-5 text-[2.35rem] font-bold tracking-tight text-white sm:text-5xl md:text-[3.1rem] md:leading-[1.05]">
                Grupo VIP
              </h2>
              <p className="mt-6 text-[1.08rem] leading-[1.6] text-zinc-200 sm:text-[1.15rem]">
                SALA ESTRATÉGICA EFEITO RESERVAS #01 · Dia 27/05 • Ao vivo e
                gratuito
              </p>

              <div className="mt-12">
                <motion.button
                  type="button"
                  onClick={handleJoinVip}
                  disabled={joining}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="group relative mx-auto inline-flex w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-amber-300/55 bg-gradient-to-b from-amber-200 via-amber-400 to-orange-600 px-10 py-[1.15rem] text-[1.06rem] font-bold text-zinc-950 shadow-[0_0_52px_-10px_rgba(251,191,36,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-opacity disabled:opacity-55 sm:w-auto sm:min-w-[320px] sm:text-[1.12rem]"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent opacity-80" />
                  <span className="relative">
                    {joining ? "Abrindo..." : "Entrar no grupo VIP"}
                  </span>
                </motion.button>
              </div>

              <p className="mt-8 text-[1.02rem] leading-[1.65] text-zinc-300 sm:text-[1.06rem]">
                Você vai receber o link da reunião e os materiais
                complementares.
              </p>
            </div>
          </section>
        </Reveal>

        {/* FAQ premium */}
        <Reveal>
          <section
            aria-label="Perguntas frequentes"
            className="relative border-t border-white/[0.06] px-5 py-20 sm:px-8 md:py-28"
          >
            <div className="absolute inset-0 bg-[#08080e]" />
            <TechGrid subtle />

            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-center text-[1.875rem] font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
                FAQ
              </h2>

              <div className="mt-12 space-y-4">
                {[
                  {
                    q: "Isso é uma aula técnica sobre ferramentas?",
                    a: "Não é uma aula técnica sobre ferramentas.",
                  },
                  {
                    q: "Qual é o foco da Sala Estratégica?",
                    a: "É uma conversa estratégica sobre estrutura, previsibilidade e operação no turismo.",
                  },
                  {
                    q: "Preciso dominar tecnologia?",
                    a: "Sem precisar virar especialista em tecnologia.",
                  },
                  {
                    q: "Há automações obrigatórias?",
                    a: "Sem automações complexas.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group overflow-hidden rounded-2xl border border-white/[0.11] bg-zinc-900/70 shadow-[0_18px_46px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] open:border-amber-400/35 open:bg-zinc-900/90 open:shadow-[0_22px_55px_-22px_rgba(251,191,36,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-[1.05rem] font-semibold text-white transition-colors hover:bg-white/[0.04] sm:text-[1.08rem] [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-500/70 bg-zinc-950 text-sm font-light text-amber-300 group-open:border-amber-400/50 group-open:bg-amber-500/[0.15]">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-white/10 px-6 py-5 text-[1.02rem] leading-[1.65] text-zinc-200 sm:text-[1.06rem]">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              <p className="mt-12 text-center text-[0.95rem] leading-relaxed text-zinc-400 sm:text-base">
                Sem promessas irreais · Sem automações complexas · Sem precisar
                virar especialista em tecnologia
              </p>
            </div>
          </section>
        </Reveal>

        <footer className="border-t border-white/[0.08] px-5 py-10 text-center text-[0.8rem] font-medium uppercase tracking-[0.22em] text-zinc-400 sm:px-8 sm:text-sm">
          Efeito Reservas #01 · 27/05 · Ao vivo e gratuito
        </footer>
      </main>

      {toast && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28 }}
          className="fixed bottom-5 left-4 right-4 z-[100] mx-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(245,158,11,0.12)]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">{toast.title}</p>
              {toast.description && (
                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="shrink-0 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:border-amber-500/40 hover:text-white"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
