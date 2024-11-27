import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "small-pulse": {
          '0%':{
            transform: 'scale(0.7) rotate(0deg)',
            opacity: "1",
          },'50%':{
            transform: 'scale(1.2) rotate(360deg)',
            opacity: "0.5",
          },'100%':{
            transform: 'scale(0.7) rotate(720deg)',
            opacity: "1",
          }
        },"glitch": {
          '0%':{
            transform: 'translate(0,0)',
            opacity: "1",
          },
          '5%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '10%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '15%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '20%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0" : "1",
          },
          '25%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '30%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '35%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '40%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0" : "1",
          },
          '45%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '50%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '55%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '60%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '65%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '70%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '75%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '80%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0" : "1",
          },
          '85%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '90%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.5" : "1",
          },
          '95%':{
            transform: 'translate(' + (Math.random() * 4 - 2) + 'px,' + (Math.random() * 4 - 2) + 'px)',
            opacity: Math.random() < 0.5 ? "0.8" : "1",
          },
          '100%':{
            transform: 'translate(0,0)',
            opacity: "1",
          },
        },"zoom-in": {
          '0%':{
            transform: 'scale(0)',
            opacity: "0",
          },
          '100%':{
            transform: 'scale(1)',
            opacity: "1",
          }
        },"scaling-x" : {
          '0%':{
            width: "0",
            opacity: "0",
          },
          '100%':{
            width: '100%',
            opacity: "1",
          }
        },"typewriter": {
          '0%':{
            width: "0",
            opacity: "0",
          },
          '100%':{
            width: '100%',
            opacity: "1",
          }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'instrument': ['"Instrument Serif"', 'serif'],
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        "small-pulse": "small-pulse 2s infinite",
        "glitch": "glitch 2s infinite",
        "zoom-in": "zoom-in 1s ease-in-out",
        "scaling-x": "scaling-x 1s ease-in-out",
        "typewriter": "typewriter 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
