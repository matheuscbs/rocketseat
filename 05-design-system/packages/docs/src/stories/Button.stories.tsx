import { Button, ButtonProps } from "@matheuscbs/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};
