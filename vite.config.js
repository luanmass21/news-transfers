// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     server: {
//       hmr: false, // Desativa o WebSocket
//     }
// })

// //-----------

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false, // Desativa completamente o WebSocket
    https: false, // Mantém o servidor rodando sem HTTPS
  }
})
