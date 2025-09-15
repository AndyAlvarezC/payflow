import type { IconType } from "react-icons";

type CardHighlightsTypes = {
  icon: IconType;
  title: string;
  text: string;
};

export default function CardHighlights({
  icon: Icon,
  title,
  text,
}: CardHighlightsTypes) {
  return (
    <div className=" flex flex-col justify-between group relative w-[80%] md:w-1/2 min-h-12 md:h-42
      rounded-2xl p-6 backdrop-blur-md bg-white/[0.08] border border-white/[0.15] hover:bg-white/[0.12] hover:border-white/[0.25] transition-all duration-300 shadow-2xl hover:shadow-blue-500/10">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="p-2 w-fit rounded-xl bg-blue-900/30 backdrop-blur-sm border border-blue-900/20">
            <Icon className="w-6 h-6 text-blue-300" />
          </div>
          <h3 className="font-extrabold text-metallic-gradient text-lg">
            {title}
          </h3>
        </div>

        <p className="text-gray-300/90 text-md leading-relaxed pt-2 line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  );
}
