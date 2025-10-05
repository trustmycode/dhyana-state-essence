import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles, Badge } from "lucide-react";
import PriceComparison from "./PriceComparison";
import { trackEvent } from "@/lib/tracking";

const plans = [
  {
    name: "Полная оплата",
    priceKzt: "59 900",
    priceRub: "8 888",
    description: "Единовременная оплата",
    popular: true,
    savings: "Максимальная выгода",
  },
  {
    name: "Рассрочка на 2 месяца",
    priceKzt: "32 400",
    priceRub: "4 800",
    description: "2 платежа по 4 800 ₽",
    popular: false,
  },
  {
    name: "Рассрочка на 3 месяца",
    priceKzt: "22 200",
    priceRub: "3 300",
    description: "3 платежа по 3 300 ₽",
    popular: false,
  },
];

const Pricing = () => {
  const handlePriceClick = (planName: string) => {
    trackEvent("view_pricing", { plan: planName });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Badge className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Специальная цена</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Инвестиция в себя
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите удобный план оплаты и начните трансформацию
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-accent shadow-accent-glow scale-105 md:scale-110' 
                  : 'border-border/50 hover:shadow-glow hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Скидка 41%
                </div>
              )}
              
              <CardHeader className="space-y-4 pt-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-1">
                  {plan.popular && (
                    <div className="text-sm text-muted-foreground line-through">
                      15 000 ₽
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.priceRub}</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.priceKzt} ₸
                  </div>
                </div>

                {plan.savings && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    {plan.savings}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <Button 
                  variant={plan.popular ? "accent" : "default"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => handlePriceClick(plan.name)}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's included */}
        <Card className="max-w-4xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Что входит во все планы
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "2 месяца онлайн-ретрита",
                "6 живых сессий с Самартом",
                "Изучение 8 уровней медитации",
                "Практические ключи входа",
                "Доступ к закрытой группе в Telegram",
                "Поддержка и ответы на вопросы",
                "Подготовительные практики",
                "Возможность испытать самадхи",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Comparison */}
        <PriceComparison />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Pricing;
