import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/tracking";

interface LeadFormProps {
  variant?: "inline" | "modal";
  onSuccess?: () => void;
}

const LeadForm = ({ variant = "inline", onSuccess }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Требуется согласие",
        description: "Пожалуйста, согласитесь на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    trackEvent("submit_lead_form", { variant });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Успешно!",
      description: "Вы зарегистрированы. Проверьте email для получения доступа.",
    });

    setFormData({ name: "", email: "", phone: "", consent: false });
    setIsSubmitting(false);
    onSuccess?.();
  };

  const isModal = variant === "modal";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="h-12"
          autoFocus={isModal}
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="h-12"
          inputMode="email"
        />
        {!isModal && (
          <Input
            type="tel"
            placeholder="Телефон (необязательно)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-12"
            inputMode="tel"
          />
        )}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, consent: checked as boolean })
          }
        />
        <label
          htmlFor="consent"
          className="text-xs text-muted-foreground leading-tight cursor-pointer"
        >
          Согласен на обработку персональных данных
        </label>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Получить доступ бесплатно"}
      </Button>
    </form>
  );
};

export default LeadForm;
