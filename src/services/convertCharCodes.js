export const convertCharCodes = (charString) => {
  return charString.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
}
