const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const localeDate = locale === "id" ? "id-ID" : "en-EN";

  return new Date(date).toLocaleDateString(localeDate, options);
};

const performSearch = (keyword, notesData) => {
  if (keyword === "") {
    return notesData;
  } else {
    return notesData.filter((note) => {
      return Object.values([note.title, note.body]).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(keyword.toLowerCase())
      );
    });
  }
};

export { showFormattedDate, performSearch };
