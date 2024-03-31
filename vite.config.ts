import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'
import styleX from 'vite-plugin-stylex'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

const config: UserConfig = {
  plugins: [
    react({
      babel: {
        plugins: [jotaiDebugLabel, jotaiReactRefresh],
        // https://jotai.org/docs/guides/vite
      },
    }),
    ssr(),
    styleX(),
  ],
}

export default config
