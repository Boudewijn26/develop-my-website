import { createVuetify, ThemeDefinition } from "vuetify";

// This is the theme we're currently using
// the colors are in hex-format. Instead of numbers going from 0 to 9, they continue after 9 to a, b, c, d, e, f
// Each pair of characters makes up a component of red, green and blue from 0 - 255. So FF 00 11 means red is 255, green is 0 and blue is 17
// Try changing the colors to see what happens, you can always look for a color tool online to help you
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const myAllBlackTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#000000',
    primary: '#000000',
    'primary-darken-1': '#000000',
    secondary: '#000000',
    'secondary-darken-1': '#000000',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      // try changing 'myCustomLightTheme' to 'dark' or 'myAllBlackTheme'
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
        myAllBlackTheme,
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
