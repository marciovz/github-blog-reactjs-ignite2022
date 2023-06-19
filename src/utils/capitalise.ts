export function captalise(text: string) {
  const textCaptalised = text[0].toLocaleUpperCase().concat(text.substring(1))
  return textCaptalised
}
