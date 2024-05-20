import * as React from 'react'
import { Container } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'primitives/Container',
  component: Container,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    // type: 'Container',
  },
  render: () => <Container>Hello</Container>,
}