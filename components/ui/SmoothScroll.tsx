"use client";

import { ReactLenis } from 'lenis/react';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';

function ScrollRestorationHandler({ children }: { children: React.ReactNode }) {
  useScrollRestoration();
  return <>{children}</>;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ duration: 1.2, wheelMultiplier: 1 }}>
      <ScrollRestorationHandler>
        {children}
      </ScrollRestorationHandler>
    </ReactLenis>
  );
}
