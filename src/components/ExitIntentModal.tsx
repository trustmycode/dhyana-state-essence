import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useExitIntent } from "@/hooks/useExitIntent";
import { trackEvent } from "@/lib/tracking";
import LeadForm from "./LeadForm";
import { Gift } from "lucide-react";

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useExitIntent(() => {
    if (!hasShown) {
      setIsOpen(true);
      setHasShown(true);
      trackEvent("exit_intent_shown");
    }
  });

  const handleSuccess = () => {
    trackEvent("exit_intent_converted");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10">
            <Gift className="w-8 h-8 text-accent" />
          </div>
          <DialogTitle className="text-2xl text-center">
            Подождите! Получите бесплатный вебинар
          </DialogTitle>
          <DialogDescription className="text-center">
            Узнайте 3 секрета настоящей медитации за 30 минут.
            Совершенно бесплатно!
          </DialogDescription>
        </DialogHeader>
        
        <LeadForm variant="modal" onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;
