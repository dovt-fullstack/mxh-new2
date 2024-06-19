export function calculateTimeAgo(sentAt: string): string {
  const sentTime = new Date(sentAt)
  const currentTime = new Date()

  const milliseconds = currentTime.getTime() - sentTime.getTime()
  const seconds = Math.round(milliseconds / 1000)

  if (seconds < 60) {
    return 'Vừa xong'
  } else if (seconds < 3600) {
    const minutes = Math.round(seconds / 60)
    return minutes + ' phút trước'
  } else if (seconds < 86400) {
    const hours = Math.round(seconds / 3600)
    return hours + ' giờ trước'
  } else if (seconds < 2592000) {
    const days = Math.round(seconds / 86400)
    return days + ' ngày trước'
  } else {
    const months = Math.round(seconds / 2592000)
    return months + ' tháng trước'
  }
}
