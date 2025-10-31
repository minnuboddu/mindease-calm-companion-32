import { Button } from "@/components/ui/button";
import { Sparkles, Wind, Book, Heart } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (text: string) => void;
  disabled?: boolean;
}

export const QuickActions = ({ onActionClick, disabled }: QuickActionsProps) => {
  const actions = [
    { icon: Wind, label: "Breathing exercise", text: "Can you guide me through a breathing exercise?" },
    { icon: Sparkles, label: "Daily motivation", text: "I need some motivation today" },
    { icon: Book, label: "Journaling tips", text: "How can journaling help me?" },
    { icon: Heart, label: "Self-care ideas", text: "What are some self-care activities I can try?" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onActionClick(action.text)}
          disabled={disabled}
          className="bg-card hover:bg-accent/50 border-border/50 text-sm transition-all hover:scale-105"
        >
          <action.icon className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  );
};
