import { ComponentType } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastObject {
  type: ToastType;
  message: string;
  duration?: number;
  id?: number;
}

export type ToastHandler = (toast: ToastObject) => void;

export interface ToastAPI {
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
}

export const toast: ToastAPI;

export function registerToastHandler(handler: ToastHandler): void;

export const SleekToast: ComponentType<{}>;

declare const _default: ComponentType<{}>;
export default _default;