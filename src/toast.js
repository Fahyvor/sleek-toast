let addToastHandler = () => {};

export const toast = {
  success: (message, duration) => addToastHandler({ type: 'success', message, duration }),
  error: (message, duration) => addToastHandler({ type: 'error', message, duration }),
  info: (message, duration) => addToastHandler({ type: 'info', message, duration }),
  warning: (message, duration) => addToastHandler({ type: 'warning', message , duration }),
};

export const registerToastHandler = (handler) => {
  addToastHandler = handler;
};