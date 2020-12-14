import React from 'react';
import * as renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import LoadingView from './index';

expect.extend(toHaveNoViolations);
afterEach(cleanup);

it('renders loading view', () => {
  const component = renderer.create(<LoadingView changeState={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
