import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Glow effects */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
          
          <div className="relative bg-gradient-to-br from-card to-secondary border border-border/50 rounded-2xl p-12 text-center space-y-8 shadow-card">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Начните трансформацию сегодня</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Готовы открыть для себя
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  настоящую медитацию?
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к ретриту и испытайте на собственном опыте все восемь уровней медитации. 
                Дайте жизни шанс измениться к лучшему.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="accent" size="xl" className="group">
                Зарегистрироваться на ретрит
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Связаться с нами
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">2 месяца</div>
                <div className="text-sm text-muted-foreground">Поддержки</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">8 уровней</div>
                <div className="text-sm text-muted-foreground">Медитации</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">Онлайн</div>
                <div className="text-sm text-muted-foreground">Формат</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default CTA;
