import React from "react";
import Player from "./Player";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
    title: "Player",
    component: Player,
    argTypes: {
        position: {
            control: {
                type: "select",
                options: ["top", "bottom"],
            },
        },
        title: {
            control: {
                type: "text",
            },
        },
        source: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;

const Template: Story = (args) => <Player {...args} />;

export const Top = Template.bind({});

export const Bottom = Template.bind({});

Top.args = {
    position: "top",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};

Bottom.args = {
    position: "bottom",
    title: "Bottom Player",
    artist: "Bottom Artist",
    bgColor: "rgba(0, 0, 0, 0.5)",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};