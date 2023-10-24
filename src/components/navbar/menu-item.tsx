"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export default function MenuItem({ onClick, label }: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="
        px-4 
        py-3 
        hover:bg-silver-tree-400
        transition
        font-semibold
        cursor-pointer
      "
    >
      {label}
    </div>
  );
}
