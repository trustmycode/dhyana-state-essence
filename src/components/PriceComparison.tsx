import { Coffee, Pizza, Film, Sparkles } from "lucide-react";

const comparisons = [
  { icon: Film, text: "2 похода в кино", price: "1 000 ₽" },
  { icon: Pizza, text: "2 доставки пиццы", price: "2 000 ₽" },
  { icon: Coffee, text: "30 чашек кофе", price: "6 000 ₽" },
];

const PriceComparison = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border">
      <h3 className="font-semibold text-lg mb-4 text-center text-foreground">
        Сравните с повседневными тратами
      </h3>
      
      <div className="space-y-3 mb-4">
        {comparisons.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{item.text}</span>
            </div>
            <span className="font-medium text-foreground">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-glow" />
            <div>
              <span className="text-sm font-semibold text-accent">
                2 месяца трансформации жизни
              </span>
              <p className="text-xs text-muted-foreground">(навык на всю жизнь)</p>
            </div>
          </div>
          <span className="font-bold text-xl text-accent">8 888 ₽</span>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
        <p className="text-xs text-center text-accent-foreground">
          💰 Всего <span className="font-bold">148 ₽ в день</span> за 2 месяца трансформации
          <br />
          <span className="text-muted-foreground">(меньше, чем чашка кофе в Starbucks)</span>
        </p>
      </div>
    </div>
  );
};

export default PriceComparison;
