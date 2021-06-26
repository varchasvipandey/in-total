export const handleDisplayTextSize = (text) => {
  if (text?.length >= 22) {
    return "1.4rem";
  } else if (text?.length >= 15) {
    return "2.4rem";
  } else if (text?.length >= 8) {
    return "3.6rem";
  } else if (text?.length < 8) {
    return "6.4rem";
  }
};
