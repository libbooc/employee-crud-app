import React from "react";

interface AlertProps {
  type: "success" | "error";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClass = type === "success" ? "alert-success" : "alert-error";

  return (
    <div role="alert" className={`alert ${alertClass}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;