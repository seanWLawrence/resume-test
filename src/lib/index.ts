import format from "date-fns/format";

export let prettyDate = (date: Date) => format(date, "MM/dd/yyyy");
