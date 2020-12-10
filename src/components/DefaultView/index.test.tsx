import React from 'react';
import * as renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import DefaultView from './index';

expect.extend(toHaveNoViolations);
afterEach(cleanup);

it('renders default view', () => {
  const component = renderer.create(<DefaultView changeState={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
