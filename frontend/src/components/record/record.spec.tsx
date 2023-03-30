import { render } from '@testing-library/react';

import Record from './record';

describe('Record', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Record />);
    expect(baseElement).toBeTruthy();
  });
});
