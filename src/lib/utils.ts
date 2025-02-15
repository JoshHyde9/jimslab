export const formatCreationDate = (date: Date) => {
  return new Date(date).toLocaleString("en-AU", {
    hour12: false,
    timeStyle: "short",
    dateStyle: "medium",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
};
