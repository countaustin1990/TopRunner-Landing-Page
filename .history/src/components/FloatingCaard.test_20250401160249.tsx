import { useState, useEffect, ReactNode } from "react";

interface FloatingCardProps {
  title: string;
  content: ReactNode;
  className?: string;
}

const DraggableCaard: React.FC<FloatingCardProps> = ({ title, content, className }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <div
      className={`fixed cursor-grab active:cursor-grabbing bg-white/150 backdrop-blur-sm rounded-xl shadow-lg p-4 w-56 border border-white/40 ${className}`}
      style={{ left: `${position.x}px`, top: `${position.y}px`, transform: "translate(-50%, -50%)" }}
      onMouseDown={handleMouseDown}
    >
      <h3 className="text-sm font-medium text-gray-600 mb-3">{title}</h3>
      <div className="mt-2 bg-white/150 backdrop-blur-sm">{content}</div>
    </div>
  );
};

export default DraggableCaasrd;
