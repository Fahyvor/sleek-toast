# 🎉 Sleek Toast

**Sleek Toast** is a beautiful, responsive, and highly customizable toast notification component for React applications. Whether you're building a dashboard, landing page, or mobile app, Sleek Toast gives you an elegant way to inform users.

## 🚀 Features

- 🎨 **Elegant UI** – Modern, gradient-based styling with smooth animations
- 🎯 **Multiple Variants** – Supports `success`, `error`, `warning` and `info`
- 🧱 **Customizable** – Tweak colors, duration, position, and more
- 💡 **Lightweight** – No external dependencies other than React
- 📱 **Responsive** – Looks great on all screen sizes
- ♿ **Accessible** – Uses ARIA labels for screen readers

## 📦 Installation

Install with npm:

```bash
npm install sleek-toast
```

## App.jsx
```jsx
// App.jsx or index.js

import React from "react";
import SleekToast from "sleek-toasts";

function App() {
  return (
    <>
      <SleekToast />
      {/* your app components */}
    </>
  );
}

export default App;
```

## Triger toast from anywhere
```jsx
import { toast } from "sleek-toasts";

// Show success
toast.success("Profile updated successfully!");

// Show error
toast.error("Something went wrong!", 5000); // Optional duration in ms
```
