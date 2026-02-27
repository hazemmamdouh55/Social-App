import React from 'react'
  import { Crown } from "lucide-react";
export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-gold" />
            <span className="font-display text-lg font-bold text-gradient-gold">PHARAOH</span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Help", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-gold transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Pharaoh Social. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
