import smoothScroll from 'smooth-scroll'
import os from './_os'

// Add class name with OS.
document.body.className = `${document.body.className} ${os()}`

// Capture scroll links.
smoothScroll.init()
