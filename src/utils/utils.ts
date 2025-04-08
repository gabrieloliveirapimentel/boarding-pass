const currentDate = new Date();

export const formattedDate = currentDate.toLocaleDateString("pt-BR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});