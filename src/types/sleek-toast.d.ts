// types/sleek-toast.d.ts or src/types/sleek-toast.d.ts
declare module 'sleek-toast' {
  import { ComponentType } from 'react';

  // Toast types
  export type ToastType = 'success' | 'error' | 'info' | 'warning';

  // Toast object structure
  export interface ToastObject {
    type: ToastType;
    message: string;
    duration?: number;
    id?: number;
  }

  // Toast handler function type
  export type ToastHandler = (toast: ToastObject) => void;

  // Toast API
  export interface ToastAPI {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
  }

  // Export the toast object
  export const toast: ToastAPI;

  // Register toast handler function
  export function registerToastHandler(handler: ToastHandler): void;

  // SleekToast component (no props needed based on the code)
  const SleekToast: ComponentType<{}>;

  export default SleekToast;
  export { SleekToast };
}