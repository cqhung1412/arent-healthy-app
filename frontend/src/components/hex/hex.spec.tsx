import { render } from '@testing-library/react';

import Hex from './hex';

describe('Hex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hex />);
    expect(baseElement).toBeTruthy();
  });
});
