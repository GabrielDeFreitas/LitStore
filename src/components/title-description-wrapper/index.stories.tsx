import { TitleDescriptionWrapper } from './index'
import { TitleDescriptionWrapperProps } from './type'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/TitleDescriptionWrapper',
  component: TitleDescriptionWrapper
} as Meta

const Template: StoryFn<TitleDescriptionWrapperProps> = (args) => <TitleDescriptionWrapper {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sample Title',
  description: 'This is a sample description for the TitleDescriptionWrapper component.'
}
