import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { MyCounter } from "../my-counter.ts";
import "../my-counter.ts";

import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
const { events, args, argTypes, template } = getStorybookHelpers("my-counter");

const meta: Meta<MyCounter> = {
  title: "Components/MyCounter",
  component: "my-counter",
  tags: ["autodocs"],
  args,
  argTypes,
  render: (args) => template(args),
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

type Story = StoryObj<MyCounter & typeof args>;

export const Default: Story = {};

export const Specified: Story = {
  render: (args) => {
    const element = document.createElement("my-counter");
    if (args.count >= 0) {
      element.setAttribute("count", args.count.toString());
    }
    return element;
  },
  args: { count: 5 },
};
