import { ITheme } from "./Theme";

export interface IQuestion {
    id: number;
    question: string;
    theme: ITheme;
    point: number;
  }