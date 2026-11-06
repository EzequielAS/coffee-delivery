export type LanguageModelAvailability = 'unavailable' | 'downloadable' | 'downloading' | 'available'

export interface LanguageModelDownloadProgressEvent extends Event {
  loaded: number;
}

export interface LanguageModelCreateMonitor extends EventTarget {
  addEventListener(
    type: 'downloadprogress',
    listener: (event: LanguageModelDownloadProgressEvent) => void,
  ): void;
}

export interface LanguageModelMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LanguageModelCreateOptions {
  initialPrompts?: LanguageModelMessage[];
  signal?: AbortSignal;
  monitor?: (monitor: LanguageModelCreateMonitor) => void;
}

export interface LanguageModelPromptOptions {
  signal?: AbortSignal;
}

export interface LanguageModelSession {
  prompt(input: string, options?: LanguageModelPromptOptions): Promise<string>;
  promptStreaming(input: string, options?: LanguageModelPromptOptions): AsyncIterable<string>;
  destroy(): void;
}

export interface LanguageModelStatic {
  availability(): Promise<LanguageModelAvailability>;
  create(options?: LanguageModelCreateOptions): Promise<LanguageModelSession>;
}

declare global {
  interface Window {
    LanguageModel?: LanguageModelStatic;
  }
}
