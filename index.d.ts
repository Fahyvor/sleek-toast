declare module 'sleek-toast' {
  import * as React from 'react';
  export interface ToastApi {
    success: (msg: string) => void;
    error: (msg: string) => void;
    info: (msg: string) => void;
    warning: (msg: string) => void;
  }
  export const toast: ToastApi;
  const SleekToast: React.FC;
  export default SleekToast;
}