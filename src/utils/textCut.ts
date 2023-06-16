export function textCut(text: string, maxLength: number) {
  if (!text || maxLength <= 0) return ''

  if (text.length <= maxLength) return text

  const textArray = text.slice(0, maxLength).split(' ')
  textArray.pop()
  const textCut = textArray.join(' ').concat('...')

  return textCut
}
