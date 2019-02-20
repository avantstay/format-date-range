import { format, isSameMonth, isSameYear } from 'date-fns'

const languagesFormat = {
  'en-US': {
    defaultStart: 'MMM DD, YYYY ',
    defaultEnd: ' MMM DD, YYYY',
    sameMonthStart: 'MMM DD',
    sameMonthEnd: 'DD, YYYY',
    sameYearStart: 'MMM DD ',
    sameYearEnd: ' MMM DD, YYYY',
  }
}

export const formatDateRange = (startDate: Date | string, endDate: Date | string, language: 'en-US' = 'en-US') => {
  if (!startDate || !endDate) {
    return ''
  }

  let langFormat = languagesFormat[language]
  let startFormat = langFormat.defaultStart
  let endFormat = langFormat.defaultEnd

  if (isSameMonth(startDate, endDate)) {
    startFormat = langFormat.sameMonthStart
    endFormat = langFormat.sameMonthEnd
  } else if (isSameYear(startDate, endDate)) {
    startFormat = langFormat.sameYearStart
    endFormat = langFormat.sameYearEnd
  }

  return [
    format(startDate, startFormat),
    format(endDate, endFormat)
  ].join('-')
}