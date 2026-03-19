import React from 'react';
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

interface SeoPageProps {
  h1: React.ReactNode;
  subtitle: string;
  image1Props: ImageProps;
  image2Props: ImageProps;
  extraImages?: ImageProps[];
  content: React.ReactNode;
  faq: FaqItem[];
}

export function SeoPageTemplate({ h1, subtitle, content, faq, image1Props, image2Props, extraImages }: SeoPageProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
          <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)] leading-[1.1]">
                  {h1}
              </h1>
          </Reveal>
          <Reveal delay={100}>
              <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                  {subtitle}
              </p>
          </Reveal>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-20">
          <div className="flex flex-col gap-12 lg:gap-20 justify-center text-lg leading-relaxed text-text-primary">
              <Reveal>
                  <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center bg-light-gray">
                      <Image src={image1Props.src} alt={image1Props.alt} width={1200} height={800} className="w-full h-auto object-contain" />
                  </div>
              </Reveal>
              
              <div className="max-w-[900px] mx-auto flex flex-col gap-6 text-text-secondary">
                  <Reveal delay={100}>
                    {content}
                  </Reveal>
              </div>

              <Reveal>
                  <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center bg-light-gray">
                      <Image src={image2Props.src} alt={image2Props.alt} width={1200} height={800} className="w-full h-auto object-contain" priority={false} />
                  </div>
              </Reveal>

              {/* Extra themed images */}
              {extraImages && extraImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {extraImages.map((img, i) => (
                          <Reveal key={i} delay={i * 100}>
                              <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center bg-light-gray">
                                  <Image src={img.src} alt={img.alt} width={800} height={600} className="w-full h-auto object-contain" />
                              </div>
                          </Reveal>
                      ))}
                  </div>
              )}
          </div>
      </section>

      {/* Internal Links CTA */}
      <section className="w-full bg-light-gray py-20 px-4 md:px-6 lg:px-20 text-center">
          <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Сделайте выбор уже сейчас</h2>
          </Reveal>
          <Reveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="primary" size="lg" href="/models">Сравнить модели</Button>
                  <Button variant="outline" size="lg" href="/prints" className="bg-white">Каталог принтов</Button>
                  <Button variant="secondary" size="lg" href="/contact">Связаться с нами</Button>
              </div>
          </Reveal>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
          <section className="w-full py-24 px-4 md:px-6 lg:px-20 border-t border-gray-200">
              <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Частые вопросы</h2>
              </Reveal>
              <Reveal delay={100}>
                  <div className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-sm border border-gray-100">
                      <Accordion items={faq} />
                  </div>
              </Reveal>
          </section>
      )}
    </div>
  );
}
