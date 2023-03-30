import { render } from '@testing-library/react';

import Scroll from './scroll';

describe('Scroll', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scroll />);
    expect(baseElement).toBeTruthy();
  });
});
