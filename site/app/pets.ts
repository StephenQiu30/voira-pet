export const pets = [
  { id: "deepseek", index: "01" },
  { id: "chatgpt", index: "02" },
  { id: "claude", index: "03" },
  { id: "gemini", index: "04" },
  { id: "grok", index: "05" },
] as const;

export type PetId = (typeof pets)[number]["id"];
