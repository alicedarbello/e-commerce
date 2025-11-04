interface DialogProps {
  isOpen: boolean | null;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Dialog({isOpen, onClose, children}: DialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 min-h-full min-w-full" onClick={onClose}>
      <div
        className="absolute top-30 right-60 h-min w-96 rounded-xs bg-white p-10 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
