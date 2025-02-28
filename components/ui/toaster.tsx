"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useEffect, useState } from "react";

export function Toaster() {
  const { toasts } = useToast();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to adjust toast duration
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640); // Mobile: width ≤ 640px (sm breakpoint)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <ToastProvider duration={isMobile ? 2000 : 5000}>
      {" "}
      {/* ⏳ Mobile closes in 2s, Desktop in 5s */}
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport
        className="
          fixed bottom-4 right-4 z-[1000] flex flex-col gap-2 p-4

          md:bottom-4 md:right-4

          max-sm:bottom-2 max-sm:left-1/2 max-sm:-translate-x-1/2
        "
      />
    </ToastProvider>
  );
}
