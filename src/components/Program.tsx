import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, MessageCircle, CheckCircle } from "lucide-react";

const Program = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Программа ретрита
            </h2>
            <p className="text-lg text-muted-foreground">
              Простой и эффективный формат для глубокой трансформации
            </p>
          </div>

          {/* Main info card */}
          <Card className="border-border/50 bg-gradient-to-br from-card to-secondary shadow-card">
            <CardContent className="p-8 space-y-8">
              {/* Schedule */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  Расписание встреч
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-lg bg-background/50 border border-border/50 space-y-3">
                    <div className="text-accent font-semibold text-sm">Утренняя сессия</div>
                    <div className="text-3xl font-bold">11:00 - 13:00</div>
                    <div className="text-sm text-muted-foreground">1,5 - 2,5 часа практики</div>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-background/50 border border-border/50 space-y-3">
                    <div className="text-accent font-semibold text-sm">Вечерняя сессия</div>
                    <div className="text-3xl font-bold">19:00 - 21:00</div>
                    <div className="text-sm text-muted-foreground">1,5 - 2,5 часа практики</div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-6 pt-6 border-t border-border/50">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  Обязательные условия
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Регистрация в Telegram</div>
                      <div className="text-sm text-muted-foreground">
                        Необходима для получения организационной информации
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Регистрация в Zoom</div>
                      <div className="text-sm text-muted-foreground">
                        Со своим именем и фамилией для участия во встречах
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  Организация
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  За несколько дней до начала ретрита будет создан чат в Telegram, 
                  в котором вы получите всю необходимую организационную информацию, 
                  ссылки на встречи и сможете задать вопросы.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Format highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 space-y-2 text-center">
                <Users className="w-8 h-8 text-primary-glow mx-auto" />
                <div className="font-semibold">Живое общение</div>
                <div className="text-sm text-muted-foreground">С Самартом в реальном времени</div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 space-y-2 text-center">
                <Clock className="w-8 h-8 text-primary-glow mx-auto" />
                <div className="font-semibold">2 встречи в день</div>
                <div className="text-sm text-muted-foreground">Утром и вечером</div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 space-y-2 text-center">
                <MessageCircle className="w-8 h-8 text-primary-glow mx-auto" />
                <div className="font-semibold">Поддержка 24/7</div>
                <div className="text-sm text-muted-foreground">В закрытой группе</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Program;
