/**
 * CalendarAPIモック
 */

export async function fetchCalendars() {
  return [
    {
      id: 1,
      name: 'プライベート',
      visible: true,
    },
    {
      id: 2,
      name: '仕事',
      visible: true,
    },
    {
      id: 3,
      name: '記念日',
      visible: false,
    },
  ]
}