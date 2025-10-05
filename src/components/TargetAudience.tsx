import { Users, Sparkles, Shield, Flame } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Пробовали медитацию, но не получили результата",
    description: "Вы сидели с закрытыми глазами, но не чувствовали ничего, кроме скуки и блуждающих мыслей",
  },
  {
    icon: Sparkles,
    title: "Ищете внутренний покой и счастье",
    description: "Устали от тревоги, стресса и внутренней пустоты. Хотите найти счастье внутри себя, а не в материальном мире",
  },
  {
    icon: Shield,
    title: "Хотите избавиться от стресса и тревоги",
    description: "Психотерапия и тренинги не дали результата. Ищете глубинное решение проблем, а не временное облегчение",
  },
  {
    icon: Flame,
    title: "Готовы к глубокой трансформации",
    description: "Не ищете «волшебную таблетку». Готовы посвятить 2 месяца реальной практике ради изменения жизни",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Этот ретрит для вас, если...
          </h2>
          <p className="text-lg text-muted-foreground">
            Узнайте, подходит ли вам этот путь трансформации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
