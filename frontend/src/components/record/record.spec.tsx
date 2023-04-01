import { render } from '@testing-library/react';

import Record from './record';

describe('Record', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Record
      imagePath='/images/d01.png'
      mainText='Test'
      buttonText='Test'
    />);
    expect(baseElement).toBeTruthy();
  });
});
