const mediaLogos = [
  { name: "YouTube", width: "w-24" },
  { name: "Telegram", width: "w-28" },
  { name: "ВКонтакте", width: "w-28" },
  { name: "Дзен", width: "w-20" },
];

const SocialProof = () => {
  return (
    <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
      <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">
        Как показано в
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500">
        {mediaLogos.map((logo) => (
          <div
            key={logo.name}
            className={`${logo.width} h-8 flex items-center justify-center px-4 py-2 rounded-md bg-card/30 border border-border/30`}
          >
            <span className="text-sm font-semibold text-foreground/70">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
