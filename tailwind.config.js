module.exports = {
     content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'rihal-white': 'rgba(244, 255, 254, 1)',
        'gradient-start': '#FF8D8D', // rgba(255,141,141,1)
        'gradient-middle': '#FFC300', // rgba(255,195,0,1)
        'gradient-end': '#962A2A', // rgba(150,42,42,1)
           'theme-background': '#ffffff',
        'theme-foreground': '#111827',
        'theme-muted-foreground': '#6b7280',
        'theme-input': '#d1d5db',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
}
