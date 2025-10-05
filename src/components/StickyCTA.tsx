import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { trackEvent } from "@/lib/tracking";

interface StickyCTAProps {
  onCTAClick: () => void;
}

const StickyCTA = ({ onCTAClick }: StickyCTAProps) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const scrollPosition = useScrollPosition();
  
  const isVisible = scrollPosition > 800 && !isDismissed;
  const isNearFooter = typeof window !== "undefined" && 
    window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 100;

  const handleClick = () => {
    trackEvent("click_sticky_cta");
    onCTAClick();
  };

  if (isNearFooter || !isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up"
      style={{ animationDuration: "0.3s" }}
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-glow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">
                Начните трансформацию сегодня
              </p>
              <p className="text-xs text-muted-foreground">
                Всего 8 888 ₽ за 2 месяца
              </p>
            </div>
            
            <div className="flex items-center gap-3 flex-1 sm:flex-initial justify-center sm:justify-end">
              <Button
                variant="hero"
                size="lg"
                onClick={handleClick}
                className="flex-1 sm:flex-initial"
              >
                <Calendar className="w-4 h-4" />
                Начать бесплатно
              </Button>
              
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 hover:bg-muted/50 rounded-md transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
