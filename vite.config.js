import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  
})
=======
  build: {
    outDir: 'dist', 
    emptyOutDir: true, 
  },
});
>>>>>>> 6ea0909a58c6b369c8cde064a7efd964f57660c3
