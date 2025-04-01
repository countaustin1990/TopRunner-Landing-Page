import  { ReactNode } from 'react';

interface FloatingCardProps {
  title: string;
  content: ReactNode;
  className?: string;
}

const FloatingCard = ({ title, content, className = '' }: FloatingCardProps) => {
  return (
    <div className={`bg-white/150 backdrop-blur-sm rounded-xl shadow-lg p-4 w-56 border mt-150 border-white/40 ${className}`}>
      <h3 className="text-sm font-medium text-gray-600 mb-3">{title}</h3>
      <div className="mt-2 bg-white/150 backdrop-blur-sm">
        {content}
      </div>
    </div>
  );
};

export default FloatingCard;
 