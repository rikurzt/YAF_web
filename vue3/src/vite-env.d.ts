/// <reference types="vite/client" />

// 聲明全域的 InitialLoader 介面
declare global {
  interface Window {
    InitialLoader?: {
      progress: number;
      updateProgress(progress: number, text?: string): void;
      hide(): void;
      isVisible(): boolean;
    };
  }
}

export {};
