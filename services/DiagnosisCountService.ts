const COUNTED_COMPLETIONS_KEY = "ice-lab:counted-diagnosis-completions";

function readCountedIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.sessionStorage.getItem(COUNTED_COMPLETIONS_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export class DiagnosisCountService {
  recordCompletion(completionId: string) {
    if (typeof window === "undefined") return false;
    const countedIds = readCountedIds();
    if (countedIds.includes(completionId)) return false;

    window.sessionStorage.setItem(
      COUNTED_COMPLETIONS_KEY,
      JSON.stringify([...countedIds.slice(-49), completionId]),
    );

    const trackedWindow = window as Window & { gtag?: (command: string, eventName: string) => void };
    if (typeof trackedWindow.gtag === "function") {
      trackedWindow.gtag("event", "diagnosis_complete");
    }

    window.dispatchEvent(new CustomEvent("diagnosis:completed", { detail: { completionId } }));
    return true;
  }

  // 향후 집계 API가 연결되면 숫자 하나만 반환하도록 교체합니다.
  async getPublishedCount(): Promise<number | null> {
    return null;
  }
}

export const diagnosisCountService = new DiagnosisCountService();

