import { useState } from "react"
import { preventAutoHideAsync } from "expo-splash-screen"

import { Home } from "./src/pages/Home"
import { Splash } from "./src/pages/Splash"

preventAutoHideAsync() // to not hide automatically the splash screen

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false)

  return splashComplete ? <Home /> : <Splash onComplete={setSplashComplete} />
}
