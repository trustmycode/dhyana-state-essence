import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Что такое настоящая медитация?",
    answer: "Медитация - это не действие, а состояние! Это наше естественное состояние, которое есть у каждого человека до определённого возраста, пока не возникнут страдания и неврозы. Медитация имеет восемь условных уровней, самый глубокий из которых называется самадхи.",
  },
  {
    question: "Нужен ли опыт медитации для участия?",
    answer: "Нет, опыт не требуется. Ретрит подходит как для начинающих, так и для тех, кто уже практикует медитацию, но хочет понять её истинную природу.",
  },
  {
    question: "Что нужно для участия в онлайн-ретрите?",
    answer: "Необходимо выполнить 2 обязательных условия: 1. Регистрация в Telegram 2. Регистрация в Zoom со своим именем и фамилией. За несколько дней до встречи будет создан чат в Telegram с организационной информацией.",
  },
  {
    question: "Сколько времени займут сессии?",
    answer: "2 встречи в день длительностью от 1 часа 30 минут до 2 часов 30 минут максимум: утром с 11 до 13 часов, вечером с 19 до 21 часа.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer: "Доступна оплата картой онлайн. Вы можете выбрать полную оплату или рассрочку на 2-3 месяца без процентов. После выбора плана вы получите ссылку для оплаты.",
  },
  {
    question: "Есть ли гарантия возврата денег?",
    answer: "Да, мы предоставляем гарантию возврата в течение первых 7 дней ретрита. Если вы поймете, что программа вам не подходит, мы вернем полную стоимость без вопросов.",
  },
  {
    question: "Что если я пропущу занятие?",
    answer: "Все занятия записываются и сохраняются в закрытой группе Telegram. Вы сможете посмотреть запись в любое удобное время. Также вы можете задать вопросы по пропущенному материалу в чате.",
  },
  {
    question: "Что я получу от ретрита?",
    answer: "Вы научитесь входить в состояние медитации, используя правильные 'ключи входа', и сможете пережить на своём опыте все восемь уровней медитации. Уже на первом уровне вы испытаете сильное состояние счастья, которое не испытывали никогда.",
  },
  {
    question: "Почему этот ретрит особенный?",
    answer: "ЭТОТ РЕТРИТ БУДЕТ СИЛЬНЕЕ ВСЕХ ПРЕДЫДУЩИХ ВМЕСТЕ ВЗЯТЫХ! Вы узнаете секреты настоящей медитации и поймёте, почему то, что большинство людей называет медитацией, на самом деле ею не является.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые важные вопросы о ретрите
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-card">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-secondary/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
