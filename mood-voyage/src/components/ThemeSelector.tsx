'use client'

import { JSX, useEffect, useState } from "react";

interface ThemeInfo {
    name: string;
    color: string;
    text: string;
    accent?: string;
}

export function ThemeSelector(): JSX.Element {
    const [theme, setTheme] = useState<string>('light');

    // Theme data with color information
    const themeData: ThemeInfo[] = [
        { name: "light", color: "#ffffff", text: "#000000" },
        { name: "dark", color: "#2a303c", text: "#ffffff" },
        { name: "cupcake", color: "#faf7f5", text: "#291334" },
        { name: "bumblebee", color: "#ffffff", text: "#000000", accent: "#f5d76e" },
        { name: "emerald", color: "#ffffff", text: "#333c4d", accent: "#66cc8a" },
        { name: "corporate", color: "#ffffff", text: "#242933", accent: "#4b6bfb" },
        { name: "synthwave", color: "#2d1b69", text: "#f9f7fd", accent: "#e779c1" },
        { name: "retro", color: "#e8d8c3", text: "#2b3440", accent: "#ef9995" },
        { name: "cyberpunk", color: "#ffee00", text: "#000000", accent: "#ff00f4" },
        { name: "valentine", color: "#f0d6e8", text: "#632c3b", accent: "#e96d7b" },
        { name: "halloween", color: "#212121", text: "#f8f8f8", accent: "#f28c18" },
        { name: "garden", color: "#e9e7e7", text: "#191919", accent: "#5c7f67" },
        { name: "forest", color: "#171212", text: "#e5e5e5", accent: "#1eb854" },
        { name: "aqua", color: "#eef5ff", text: "#193247", accent: "#09ecf3" },
        { name: "lofi", color: "#ffffff", text: "#000000", accent: "#808080" },
        { name: "pastel", color: "#fbeaeb", text: "#2c2c2c", accent: "#d9b4ff" },
        { name: "fantasy", color: "#ffe799", text: "#000000", accent: "#f74c4c" },
        { name: "wireframe", color: "#e6e6e6", text: "#2b3440", accent: "#b8b8b8" },
        { name: "black", color: "#000000", text: "#ffffff", accent: "#333333" },
        { name: "luxury", color: "#09090b", text: "#ffffff", accent: "#c6a35c" },
        { name: "dracula", color: "#282a36", text: "#f8f8f2", accent: "#ff79c6" },
        { name: "cmyk", color: "#ffffff", text: "#000000", accent: "#45AEEE" },
        { name: "autumn", color: "#f8f4e3", text: "#1f2937", accent: "#8C0327" },
        { name: "business", color: "#ffffff", text: "#000000", accent: "#1C4E80" },
        { name: "acid", color: "#ffff00", text: "#000000", accent: "#00ff00" },
        { name: "lemonade", color: "#fff8e1", text: "#374151", accent: "#FDE047" },
        { name: "night", color: "#0f1729", text: "#c8d7f5", accent: "#38bdf8" },
        { name: "coffee", color: "#20161F", text: "#EDE6D4", accent: "#DD9E7B" },
        { name: "winter", color: "#e3e7e8", text: "#0f1d2d", accent: "#5cc2f2" }
    ];

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
    }, []);

    const handleThemeChange = (newTheme: string): void => {
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-96 overflow-y-auto">
            {themeData.map((t) => (
              <li key={t.name} className="mb-1">
                <button
                  className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg ${theme === t.name ? 'outline outline-2 outline-primary' : 'hover:bg-base-100'}`}
                  onClick={() => handleThemeChange(t.name)}
                >
                  <div 
                    className="w-5 h-5 rounded-full border border-base-content/20" 
                    style={{ backgroundColor: t.color, borderColor: t.text }}
                  >
                    {t.accent && (
                      <div 
                        className="w-2 h-5 rounded-full" 
                        style={{ backgroundColor: t.accent }}
                      ></div>
                    )}
                  </div>
                  <span className="text-sm capitalize">{t.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    
}

