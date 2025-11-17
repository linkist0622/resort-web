// src/types/news.ts
export type NewsCategory = "INFO" | "STAY" | "EVENT";

export interface NewsItem {
  id: string;
  date: string; // "2025.11.01" など文字列で扱う
  category: NewsCategory;
  title: string;
  href?: string;
}
