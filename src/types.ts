export interface ToastOptions {
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

export interface ToastAPI {
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
}

export interface SleekToastProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}