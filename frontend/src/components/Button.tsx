type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={`group relative w-44 h-12 rounded-4xl overflow-hidden cursor-pointer 
                transition-all duration-500 ease-in-out font-bold
                shadow-[inset_0_0_20px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.2)]
                group hover:shadow-[inset_0_0_40px_rgba(59,130,246,0.3),0_0_40px_rgba(59,130,246,0.2)]
                ${className || ""}`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
}
