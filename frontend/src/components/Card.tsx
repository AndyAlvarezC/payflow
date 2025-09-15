import React from "react";

const Card: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 flex items-center justify-center">
      <div className="relative z-10 group">
        <div className="relative w-72 h-44 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-900 rounded-xl shadow-2xl border border-zinc-700/50 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="text-zinc-400 text-xs font-extrabold tracking-wider">
                  PAYFLOW
                </div>
              </div>

              <div className="absolute top-14 left-6">
                <div className="w-8 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded border border-amber-600/30 shadow-sm">
                  <div className="w-full h-full rounded bg-gradient-to-br from-amber-200/80 to-amber-400/80 flex items-center justify-center">
                    <div className="w-4 h-3 grid grid-cols-3 gap-px">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-amber-700/60 rounded-[0.5px]"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4 text-zinc-300 font-mono text-sm">
                  <span className="tracking-widest">••••</span>
                  <span className="tracking-widest">••••</span>
                  <span className="tracking-widest">••••</span>
                  <span className="tracking-widest">••••</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-zinc-500 text-xs font-light">
                    CARDHOLDER
                  </div>
                  <div className="text-zinc-400 text-xs font-mono">12/28</div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/3 to-transparent transform -skew-x-12 translate-x-full animate-[shine_4s_ease-in-out_infinite]"></div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/10 rounded-xl blur-2xl transform translate-y-4 scale-95"></div>
        </div>
      </div>

      <div className="absolute top-16 right-1/4 w-px h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-60"></div>

      <div className="absolute top-24 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-28 left-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <defs>
            <linearGradient
              id="subtleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#06b6d4", stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M120,200 Q200,180 280,190"
            stroke="url(#subtleGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,4"
          />
        </svg>
      </div>

      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-zinc-500/40 rounded-full animate-float"
          style={{
            left: `${25 + i * 15}%`,
            top: `${35 + (i % 2) * 30}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + i}s`,
          }}
        ></div>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(300%) skewX(-12deg); }
          }
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) scale(1); 
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-15px) scale(1.2); 
              opacity: 0.8;
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `,
        }}
      />
    </div>
  );
};

export default Card;
