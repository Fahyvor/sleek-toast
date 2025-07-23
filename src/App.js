import { useState, useEffect } from "react";
import { registerToastHandler } from "./toast";
import "./App.css"

let toastId = 0;

const SleekToast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    registerToastHandler((toast) => {
      const id = toastId++;
      const toastWithId = { ...toast, id };
      setToasts((prevToasts) => [...prevToasts, toastWithId]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
      }, toast.duration || 3000); 
    });
  }, []);

  return (
    <div className="sleek-toast-container">
      {toasts.map(({ id, type, message }) => (
        <div className={`sleek-toasts--${type}`} key={id}>
          <div className={`sleek-toast-dot--${type}`}></div>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
};

export default SleekToast;
