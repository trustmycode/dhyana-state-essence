import { Users, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const ParticipantCounter = () => {
  const [registered, setRegistered] = useState(347);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistered((prev) => (prev < 353 ? prev + 1 : 347));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const spotsLeft = 400 - registered;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm animate-fade-in-up">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" />
          <div>
            <span className="text-sm text-muted-foreground">Уже зарегистрировалось:</span>
            <span className="ml-2 text-xl font-bold text-accent">{registered}</span>
          </div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-border" />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-accent-glow" />
          <div>
            <span className="text-sm text-muted-foreground">Осталось мест:</span>
            <span className="ml-2 text-xl font-bold text-accent-glow">{spotsLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCounter;
