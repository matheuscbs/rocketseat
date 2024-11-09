// .storybook/darkTheme.ts
import { create } from "@storybook/theming";

const darkTheme = create({
  base: "dark",
  brandTitle: "Design System",
  brandUrl: "https://meuprojeto.com",
  brandImage: "https://meuprojeto.com/logo.png", // Logo personalizada
  appBg: "#121212", // Cor de fundo da interface
  appContentBg: "#1e1e1e", // Fundo da área principal
  appBorderColor: "#333333", // Cor da borda
  appBorderRadius: 4,
  textColor: "#ffffff", // Cor do texto
});

export default darkTheme;
