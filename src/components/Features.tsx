import { Check, Sparkles, Brain, Heart, Lightbulb, Users, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "8 уровней медитации",
    description: "Изучите все восемь условных уровней медитации, включая самый глубокий — самадхи",
  },
  {
    icon: Lightbulb,
    title: "Ключи входа",
    description: "Получите практические техники для входа в состояние медитации",
  },
  {
    icon: Heart,
    title: "Состояние счастья",
    description: "Уже на первом уровне испытайте сильное состояние счастья",
  },
  {
    icon: Users,
    title: "Живые сессии",
    description: "6 встреч с Самартом Саммасати в режиме реального времени",
  },
  {
    icon: Zap,
    title: "Поддержка 2 месяца",
    description: "Постоянная поддержка и ответы на вопросы в течение всего ретрита",
  },
  {
    icon: Clock,
    title: "Удобный формат",
    description: "Утренние и вечерние сессии онлайн без отрыва от жизни",
  },
];

const highlights = [
  "Понимание истинной природы медитации",
  "Освобождение от страданий и неврозов",
  "Возможность испытать состояние самадхи",
  "Доступ к закрытой группе в Telegram",
  "Подготовительные практики в группе",
  "Методы успокоения ума",
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Что вы получите</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Особенности ретрита
          </h2>
          <p className="text-lg text-muted-foreground">
            ЭТОТ РЕТРИТ БУДЕТ СИЛЬНЕЕ ВСЕХ ПРЕДЫДУЩИХ ВМЕСТЕ ВЗЯТЫХ!
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights list */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-secondary border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                Все включено в программу
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Features;
