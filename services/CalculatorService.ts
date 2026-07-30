import { calculateDiagnosis, type DiagnosisInput } from "../lib/calculate";

export class CalculatorService {
  calculate(input: DiagnosisInput) { return calculateDiagnosis(input); }
}

export const calculatorService = new CalculatorService();

