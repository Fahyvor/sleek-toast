declare module "sleek-toast" {
  import * as React from "react";

  export interface SleekToastProps {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  }

  export const SleekToast: React.FC<SleekToastProps>;
  export default SleekToast;

  export type ToastType = "success" | "error" | "info" | "warning";

  export const toast: {
    (message: string, type?: ToastType, duration?: number): void;
    success(message: string, duration?: number): void;
    error(message: string, duration?: number): void;
    info(message: string, duration?: number): void;
    warning(message: string, duration?: number): void;
  };
}
