import { render } from '@testing-library/react';

import Photo from './photo';

describe('Photo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Photo imageName="logo" imageSpec="test" />);
    expect(baseElement).toBeTruthy();
  });
});
