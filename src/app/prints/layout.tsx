import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Термосы с принтом, надписями, фото и аниме-дизайном | Studio 696",
  description: "Каталог принтов для термосов. Закажите термос со своим рисунком, аниме, мемами или фотографией. Бесплатная помощь дизайнера.",
  alternates: {
    canonical: "/prints",
  },
};

export default function PrintsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
