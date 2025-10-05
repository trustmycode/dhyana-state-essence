import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Video, Play } from "lucide-react";
import heroImage from "@/assets/meditation-hero.jpg";
import SocialProof from "./SocialProof";
import ParticipantCounter from "./ParticipantCounter";
import LeadForm from "./LeadForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/tracking";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleMainCTA = () => {
    trackEvent("click_cta_main");
    setIsLeadFormOpen(true);
  };

  const handleSecondaryCTA = () => {
    trackEvent("click_cta_secondary");
    const targetSection = document.getElementById("target-audience");
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoClick = () => {
    trackEvent("view_hero");
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
      
      {/* Video preview with overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="relative w-full h-full">
          <img 
            src={heroImage} 
            alt="Медитация в глубоком состоянии" 
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleVideoClick}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            aria-label="Воспроизвести видео"
          >
            <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
              <Play className="w-10 h-10 text-white ml-1" fill="white" />
            </div>
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-glow">Онлайн-ретрит с Самартом Саммасати</span>
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

          {/* Description with pain point */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Вы пробовали медитировать, но не получили результата? Чувствуете, что «что-то не так»? 
            <br />
            <span className="text-accent font-semibold">Узнайте, почему 95% людей медитируют неправильно</span>
            {" "}и как войти в настоящее состояние медитации уже сегодня.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={handleMainCTA}
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Начать бесплатно
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleSecondaryCTA}
            >
              <Video className="w-5 h-5" />
              Узнать больше
            </Button>
          </div>

          {/* Participant Counter */}
          <ParticipantCounter />

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

          {/* Social Proof */}
          <SocialProof />
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Что такое НАСТОЯЩАЯ медитация?</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Здесь будет видео (30 сек)</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lead Form Modal */}
      <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Начните трансформацию сегодня</DialogTitle>
          </DialogHeader>
          <LeadForm onSuccess={() => setIsLeadFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
