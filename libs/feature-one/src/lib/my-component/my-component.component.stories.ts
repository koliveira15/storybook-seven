import { Meta } from '@storybook/angular';
import { MyComponentComponent } from './my-component.component';

export default {
  title: 'MyComponentComponent',
  component: MyComponentComponent,
} as Meta<MyComponentComponent>;

export const Primary = {
  render: (args: MyComponentComponent) => ({
    props: args,
  }),
  args: {},
};
