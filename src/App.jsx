import React, { useState, useEffect } from "react";
import { registerToastHandler } from "./toast";
import "./App.css";

let toastId = 0;

const SleekToast = ({ position = "top-right" }) => {
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

  const getContainerClass = () => {
    let baseClass = "sleek-toast-container";
    
    switch (position) {
      case "top-left":
        return `${baseClass} sleek-toast-container--top-left`;
      case "top-right":
        return `${baseClass} sleek-toast-container--top-right`;
      case "bottom-left":
        return `${baseClass} sleek-toast-container--bottom-left`;
      case "bottom-right":
        return `${baseClass} sleek-toast-container--bottom-right`;
      default:
        return `${baseClass} sleek-toast-container--top-right`;
    }
  };

  return (
    <div className={getContainerClass()}>
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