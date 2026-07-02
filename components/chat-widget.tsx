"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

// Replace with the PRODUCTION webhook URL of your "When chat message received"
// trigger node in n8n. Find it inside that node -> "Chat" tab -> Production URL.
// The workflow must be Published/Active for this URL to respond.
const N8N_WEBHOOK_URL = "http://localhost:5678/webhook/6b934c0e-8509-424a-bc74-822f9c8ce9f1/chat";

export function ChatWidget() {
  useEffect(() => {
    let mounted = true;

    import("@n8n/chat").then(({ createChat }) => {
      if (!mounted) return;
      createChat({
        webhookUrl: N8N_WEBHOOK_URL,
        mode: "window",
        showWelcomeScreen: true,
        initialMessages: [
          "Hi 👋 I'm the PRD Insurance & Finance assistant.",
          "Ask me about our insurance or investment plans, or let me know how I can help!",
        ],
        i18n: {
          en: {
            title: "PRD Insurance & Finance",
            subtitle: "Ask us anything about insurance & finance.",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your question...",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}