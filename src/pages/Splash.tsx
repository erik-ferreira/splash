import { useState } from "react"
import { StyleSheet } from "react-native"
import { hideAsync } from "expo-splash-screen"
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av"

interface SplashProps {
  onComplete: (status: boolean) => void
}

export function Splash({ onComplete, ...rest }: SplashProps) {
  const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  )

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      // if video stop, show splash
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync()
      }

      if (status.didJustFinish) {
        onComplete(true)
      }
    }

    setLastStatus(status)
  }

  return (
    <Video
      shouldPlay
      isLooping={false}
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../../assets/splash.mp4")}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  )
}
