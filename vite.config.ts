import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * CONFIGURAÇÃO VITE - OTIMIZADA PARA PERFORMANCE
 * ═══════════════════════════════════════════════════════════════════════
 */

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Otimizações de Build
  build: {
    // Gera source maps apenas em dev (reduz tamanho do bundle)
    sourcemap: mode === "development",
    
    // Minificação agressiva
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production", // Remove console.log em produção
        drop_debugger: true,
        pure_funcs: mode === "production" ? ["console.log", "console.info"] : [],
      },
    },
    
    // Configurações de chunk para melhor cache
    rollupOptions: {
      output: {
        manualChunks: {
          // React DEVE ser separado primeiro (outros vendors dependem dele)
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
        },
        // Nomes de arquivo com hash para cache imutável
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Otimizações de performance
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
