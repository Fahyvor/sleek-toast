import { ToastOptions, ToastAPI } from './types';

let addToastHandler: (toast: ToastOptions) => void = () => {};

export const toast: ToastAPI = {
  success: (message: string, duration?: number) => 
    addToastHandler({ type: 'success', message, duration }),
  error: (message: string, duration?: number) => 
    addToastHandler({ type: 'error', message, duration }),
  info: (message: string, duration?: number) => 
    addToastHandler({ type: 'info', message, duration }),
  warning: (message: string, duration?: number) => 
    addToastHandler({ type: 'warning', message, duration }),
};

export const registerToastHandler = (handler: (toast: ToastOptions) => void): void => {
  addToastHandler = handler;
};