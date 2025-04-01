import { useState } from "react";


interface FloatingCardProps {
  title: string;
  content: ReactNode;
  className?: string;
}

const DraggableCard = ({ title, content, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className={`absolute cursor-grab active:cursor-grabbing bg-white/150 backdrop-blur-sm rounded-xl shadow-lg p-4 w-56 border border-white/40 ${className}`}
      style={{ left: position.x, top: position.y, transform: "translate(-50%, -50%)" }}
      draggable
      onDrag={handleDrag}
    >
      <h3 className="text-sm font-medium text-gray-600 mb-3">{title}</h3>
      <div className="mt-2 bg-white/150 backdrop-blur-sm">{content}</div>
    </div>
  );
};

export default DraggableCard;
