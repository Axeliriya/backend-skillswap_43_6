/** Нормализация email: приводим к нижнему регистру и обрезаем пробелы */
function normalizeEmail(email: unknown): string | null {
  if (!email || typeof email !== "string") return null;
  return email.trim().toLowerCase();
}

export default normalizeEmail;
