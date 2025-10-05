import { CheckCircle } from "lucide-react";

const weeks = [
  {
    title: "Неделя 1: Подготовка и очищение",
    days: "День 1-7",
    phases: [
      {
        period: "День 1-3: Понимание природы медитации",
        result: "Поймете разницу между «медитацией-действием» и «медитацией-состоянием»",
      },
      {
        period: "День 4-7: Подготовительные практики",
        result: "Успокоите «обезьяний ум», научитесь базовому расслаблению",
      },
    ],
  },
  {
    title: "Неделя 2-3: Первые уровни медитации (1-3)",
    days: "День 8-21",
    phases: [
      {
        period: "День 8-14: Изучение и практика уровней 1-3",
        result: "Испытаете первые волны естественного счастья и покоя",
      },
      {
        period: "День 15-21: Углубление практики",
        result: "Научитесь удерживать состояние медитации 15-30 минут",
      },
    ],
  },
  {
    title: "Неделя 4-6: Глубокие состояния (4-6 уровни)",
    days: "День 22-42",
    phases: [
      {
        period: "День 22-35: Работа с глубокими уровнями",
        result: "Испытаете состояние внутреннего блаженства (ананда)",
      },
      {
        period: "День 36-42: Практика устойчивости",
        result: "Сможете входить в медитацию «по запросу»",
      },
    ],
  },
  {
    title: "Неделя 7-8: Самадхи и интеграция (7-8 уровни)",
    days: "День 43-60",
    phases: [
      {
        period: "День 43-53: Изучение самадхи",
        result: "Прикоснетесь к самому глубокому состоянию — полному растворению эго",
      },
      {
        period: "День 54-60: Интеграция в жизнь",
        result: "Научитесь поддерживать состояние медитации в повседневной жизни",
      },
    ],
  },
];

const DailyProgram = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Программа по неделям
          </h2>
          <p className="text-lg text-muted-foreground">
            Пошаговый путь к освоению всех 8 уровней медитации
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

          <div className="space-y-8">
            {weeks.map((week, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary shadow-glow hidden md:block" />

                <div className="md:ml-20 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary-glow uppercase tracking-wider">
                      {week.days}
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-1 text-foreground">
                      {week.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {week.phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          {phase.period}
                        </p>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-accent-foreground font-medium">
                            Результат: {phase.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyProgram;
