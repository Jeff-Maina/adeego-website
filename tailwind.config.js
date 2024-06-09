/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "vest-b": "Vesterbro Bold",
        "vest-eb": "Vesterbro Extrabold",
        "vest-l": "Vesterbro Light",
        "vest-md": "Vesterbro Medium",
        "vest-ps": "Vesterbro Poster",
        "vest-rg": "Vesterbro Regular",
      },
    },
  },
  plugins: [],
};
