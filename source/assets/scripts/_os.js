export default function () {
  var userAgent = window.navigator.userAgent

  if (/Linux/.test(userAgent)) {
    return 'linux'
  }
  if (/Macintosh/.test(userAgent)) {
    return 'mac'
  }
  if (/Windows/.test(userAgent)) {
    return 'windows'
  }
  return null
}
