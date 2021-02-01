import React from 'react';
import { shallow , ShallowWrapper} from 'enzyme';
import { Home } from '../components/CLASS_BASED_IMPLEMENTATION_WITH_REDUX/Home';

describe('Home.tsx',() => {
  let wrapper: ShallowWrapper, mainComponent: ShallowWrapper, destroyedMessage: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Home isDestroyed={false}/>);
    mainComponent = wrapper.find('[data-test="home-component-main"]');
    destroyedMessage = wrapper.find('[data-test="home-component-destroyed-message"]');
  });

  it('renders only main page', () => {
    expect(mainComponent.exists()).toBeTruthy();
    expect(destroyedMessage.exists()).toBeFalsy();
  });

  it('renders only destroyed message', () => {
    wrapper.setProps({ isDestroyed: true });
    destroyedMessage = wrapper.find('[data-test="home-component-destroyed-message"]');
    mainComponent = wrapper.find('[data-test="home-component-main"]');

    expect(destroyedMessage.exists()).toBeTruthy();
    expect(mainComponent.exists()).toBeFalsy();
  });
});
