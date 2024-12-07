import { Text, TextProps } from "@matheuscbs/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et illo facilis rem quia voluptatem eligendi quas soluta voluptatibus maxime sit nisi quae, rerum ipsa! Nostrum repellat cumque architecto molestias?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
