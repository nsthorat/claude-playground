/**
 * iOS Audio Unlock Utility
 *
 * iOS Safari mutes Web Audio API when the hardware mute switch is on.
 * This utility uses unmute-ios-audio to work around that limitation.
 *
 * The package works by playing a silent sound using an <audio> tag
 * (which works even in silent mode) to unlock the audio session.
 */

import unmuteAudio from 'unmute-ios-audio'

let initialized = false

/**
 * Initialize iOS audio unlock - call this once on app mount
 * This registers event handlers to unlock audio on user interaction
 */
export function initIOSAudioUnlock(): void {
  if (initialized) return
  initialized = true

  // This enables Web Audio even when mute switch is on
  unmuteAudio()
}

/**
 * Check if we're on iOS
 */
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}
