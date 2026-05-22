import { useState } from "react";
import { MessageCircle, Users, Phone, X } from "lucide-react";

const WHATSAPP_NUMBER = "254701165121";
const GROUP_LINK = "https://chat.whatsapp.com/your-group-invite-code";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const directMsg = encodeURIComponent("Hello Chapati Sunday! I'd like to learn more.");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[260px] overflow-hidden rounded-2xl border border-border bg-card shadow-warm animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-gradient-warm px-4 py-3 text-primary-foreground">
            <p className="font-display text-base leading-tight">Chat with us</p>
            <p className="text-xs opacity-90">We usually reply in minutes</p>
          </div>
          <div className="p-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${directMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-secondary"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf/15 text-leaf">
                <Phone className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Message us directly</p>
                <p className="truncate text-xs text-muted-foreground">+254 701 165 121</p>
              </div>
            </a>
            <a
              href={GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-secondary"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
                <Users className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Join our community</p>
                <p className="truncate text-xs text-muted-foreground">WhatsApp group invite</p>
              </div>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat menu" : "Open WhatsApp chat"}
        className="group grid h-14 w-14 place-items-center rounded-full bg-leaf text-leaf-foreground shadow-warm transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            1
          </span>
        )}
      </button>
    </div>
  );
}
