/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tue configurazioni esistenti
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // --- AGGIUNGI QUESTA PARTE ---
  // Questa regola serve per far funzionare l'admin di TinaCMS
  rewrites: async () => {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  // --- FINE PARTE DA AGGIUNGERE ---
};

export default nextConfig;
