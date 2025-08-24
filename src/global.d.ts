declare module 'sleek-toast' {
  import * as React from "react";

  export const toast: {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
  };

  const SleekToast: React.ComponentType;
  export default SleekToast;
}
