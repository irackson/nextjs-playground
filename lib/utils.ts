import isURL from "validator/lib/isURL";

export const truncateString = (str = "", maxLength = 80): string => {
  if (isURL(str)) {
    return str;
  } else {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }
};
