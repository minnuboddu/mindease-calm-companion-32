import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export const ChatMessage = ({ role, content, isStreaming }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] px-6 py-4 rounded-3xl shadow-sm",
          isUser
            ? "bg-gradient-to-br from-primary/90 to-primary text-primary-foreground"
            : "bg-gradient-to-br from-secondary/20 to-secondary/10 text-foreground border border-secondary/20"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {content}
          {isStreaming && <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse" />}
        </p>
      </div>
    </div>
  );
};
