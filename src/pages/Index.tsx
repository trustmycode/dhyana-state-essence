import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Author from "@/components/Author";
import TargetAudience from "@/components/TargetAudience";
import DailyProgram from "@/components/DailyProgram";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentModal from "@/components/ExitIntentModal";
import FloatingContacts from "@/components/FloatingContacts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleCTAClick = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <TargetAudience />
      <Features />
      <DailyProgram />
      <Author />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      
      {/* Sticky CTA */}
      <StickyCTA onCTAClick={handleCTAClick} />
      
      {/* Exit Intent Modal */}
      <ExitIntentModal />
      
      {/* Floating Contacts */}
      <FloatingContacts />

      {/* Lead Form Modal */}
      <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Начните трансформацию сегодня</DialogTitle>
          </DialogHeader>
          <LeadForm onSuccess={() => setIsLeadFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
