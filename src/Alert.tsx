import React from "react";

interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = "info",
  title,
  onClose,
  className = "",
}) => {
  const variantStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    danger: "bg-red-50 border-red-200 text-red-800",
  };

  const variantIcons = {
    info: "ℹ",
    success: "✓",
    warning: "⚠",
    danger: "✕",
  };

  return (
    <div
      className={`border-l-4 p-4 rounded ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 text-lg font-bold">
          {variantIcons[variant]}
        </span>
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 text-lg hover:opacity-70 transition-opacity"
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
