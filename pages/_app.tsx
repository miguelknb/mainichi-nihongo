import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";
import '../public/fonts/fonts.css'

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

declare global {
  interface Array<T> {
      getRandomItem(): T;
  }
}

Array.prototype.getRandomItem = function<T>(): T {
  const randomIndex: number = Math.floor(Math.random() * this.length);
  return this[randomIndex];
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
