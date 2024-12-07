import { Avatar, AvatarProps } from "@matheuscbs/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/68289167?v=4",
    alt: "Matheus Cardoso",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
