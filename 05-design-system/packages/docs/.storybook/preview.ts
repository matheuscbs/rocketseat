import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import darkTheme from "./darkTheme";

const preview: Preview = {
  parameters: {
    darkMode: {
      current: "dark",
      dark: darkTheme,
      light: themes.light,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
