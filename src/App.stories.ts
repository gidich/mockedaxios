import type { Meta, StoryObj } from "@storybook/react";

import App from "./App";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const FirstStory: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: "https://jsonplaceholder.typicode.com/todos/1",
        method: "GET",
        status: 200,
        response: {
          id: 1,
          title: "hello mock",
          completed: true,
          data: "Hello storybook-addon-mock!",
        },
      },
    ],
  },
};
