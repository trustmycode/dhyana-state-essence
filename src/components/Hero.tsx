import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Video } from "lucide-react";
import heroImage from "@/assets/meditation-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Медитация в глубоком состоянии" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-glow">2 месяца трансформации</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Что такое{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              НАСТОЯЩАЯ
            </span>
            <br />
            медитация?!
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Большинство людей думают, что медитация — это просто сиденье с закрытыми глазами. 
            Но медитация — это <span className="text-accent font-semibold">состояние</span>, а не действие! 
            Узнайте секреты настоящей медитации и научитесь входить в это состояние.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Зарегистрироваться на ретрит
            </Button>
            <Button variant="outline" size="xl">
              <Video className="w-5 h-5" />
              Узнать больше
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-accent">2 месяца</div>
              <div className="text-sm text-muted-foreground">Длительность ретрита</div>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-accent">8 уровней</div>
              <div className="text-sm text-muted-foreground">Состояний медитации</div>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-accent">Онлайн</div>
              <div className="text-sm text-muted-foreground">Zoom встречи</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
