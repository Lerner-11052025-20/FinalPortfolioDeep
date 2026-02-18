/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
      colors: {
        primary: "#05060b", // Deep dark background
        secondary: "#0a0c14", // Slightly lighter card background
        accent: {
          blue: "#3b82f6",
          emerald: "#10b981",
          purple: "#8b5cf6",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.4)",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': "linear-gradient(135deg, #05060b 0%, #0a0c14 100%)",
        'gradient-accent': "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
      },
            screens: {
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
}
