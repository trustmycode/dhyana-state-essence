import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Sammasati
              </h3>
              <p className="text-sm text-muted-foreground">
                Передача сокровенных знаний йоги и медитации для трансформации жизни
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Быстрые ссылки</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#hero" className="hover:text-accent transition-colors">
                    О ретрите
                  </a>
                </li>
                <li>
                  <a href="#author" className="hover:text-accent transition-colors">
                    О Самарте
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-accent transition-colors">
                    Программа
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-accent transition-colors">
                    Цены
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="block">Telegram для регистрации</span>
                </li>
                <li>
                  <span className="block">Zoom для встреч</span>
                </li>
                <li className="pt-2">
                  <a href="#" className="text-accent hover:text-accent-glow transition-colors">
                    Связаться с нами →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Sammasati. Все права защищены.</p>
            <p className="flex items-center gap-2">
              Создано с <Heart className="w-4 h-4 text-accent fill-accent" /> для трансформации
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
