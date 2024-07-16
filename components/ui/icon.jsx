import { icons } from 'lucide-react';

const Icon = ({ name, strokeWidth, size, color }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={color} strokeWidth={strokeWidth} />;
};

export default Icon;