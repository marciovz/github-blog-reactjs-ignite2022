import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function distanceInTimeToNow(date: Date | string) {
  const distanceInTime = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })

  return distanceInTime
}
