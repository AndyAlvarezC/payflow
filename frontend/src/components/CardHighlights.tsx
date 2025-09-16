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
    <div
      className="group relative w-[90%] max-w-sm min-h-[200px] rounded-2xl p-6 
      backdrop-blur-md bg-slate-800/40 border border-slate-700/50 
      hover:bg-slate-800/60 hover:border-slate-600/70
      transition-all duration-500 ease-out
      shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 
      hover:-translate-y-2 hover:scale-[1.02]
      overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/20 via-transparent to-slate-900/30 opacity-60"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 via-transparent to-white/5"></div>

      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex flex-row items-start gap-4 mb-6">
          <div className="relative">
            <div
              className="p-3 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/80 
              backdrop-blur-sm border border-slate-600/40 
              group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/25
              transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
          </div>

          <div className="flex-1">
            <h3
              className="font-bold text-xl mb-2 
              bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent
              group-hover:from-white group-hover:via-cyan-100 group-hover:to-cyan-300
              transition-all duration-300"
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <p
            className="text-slate-300 text-sm leading-relaxed 
            group-hover:text-slate-200 transition-colors duration-300
            line-clamp-4"
          >
            {text}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-slate-600/70 transition-colors duration-300">
          <div
            className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full 
            opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"
          ></div>
        </div>
      </div>

      <div
        className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-cyan-500/40 
        group-hover:bg-cyan-400/60 group-hover:w-3 group-hover:h-3 transition-all duration-300"
      ></div>
    </div>
  );
}
