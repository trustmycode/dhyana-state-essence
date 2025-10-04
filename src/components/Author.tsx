import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import patternImage from "@/assets/meditation-pattern.jpg";

const Author = () => {
  const credentials = [
    "Не гуру, не наставник, не учитель — просто передает методы",
    "Продолжает традицию передачи знаний от Мастера к ученику",
    "Фокус на методах успокоения ума, а не на асанах и фитнесе",
    "Передает сокровенные знания йоги, которые передавали ему",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={patternImage} 
                    alt="Самарт Саммасати" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:to-card/90" />
                </div>

                {/* Content side */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block">
                      <Quote className="w-8 h-8 text-accent opacity-50" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                      Самарт Саммасати
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Проводник древних практик йоги
                    </p>
                  </div>

                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      Двадцать лет назад занимался бизнесом, общался с влиятельными людьми и мечтал о яхте. 
                      Имел все атрибуты успеха: капиталы, спорткары, глянцевую жизнь. Кроме счастья.
                    </p>
                    <p>
                      Внутри страдал, и успешный образ был компенсацией детской боли. С внутренней боли 
                      начался поиск долгожданного счастья.
                    </p>
                    <p className="text-accent font-medium">
                      Высшая йога — это не асаны и фитнес, а методы успокоения ума и практики изменения 
                      жизни к лучшему.
                    </p>
                  </div>

                  <div className="pt-4 space-y-3">
                    {credentials.map((credential, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{credential}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 p-6 rounded-lg bg-gradient-primary/10 border border-primary/20">
                    <p className="text-sm italic text-foreground/90">
                      "Если вы читаете этот текст, вы — везунчик. Древние практики йоги избавят вас от боли, 
                      страха и чувства одиночества. Просто попробуйте — дайте жизни шанс ⭐"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Author;
