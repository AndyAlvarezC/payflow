import type { ReactNode } from "react";

type CardTrustTypes = {
  logo: ReactNode
  text?: string
  textClassName?: string
};

export default function PartnersCard({
  logo,
  text,
  textClassName,
}: CardTrustTypes) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 h-24">
      <div className="flex items-center justify-center w-20 h-20 text-gray-200">{logo}</div>
      {text && (
        <span className={textClassName ?? "text-white text-md"}>{text}</span>
      )}
    </div>
  );
}
