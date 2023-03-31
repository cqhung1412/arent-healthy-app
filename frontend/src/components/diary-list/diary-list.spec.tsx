import { render } from '@testing-library/react';

import DiaryList from './diary-list';

describe('DiaryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DiaryList />);
    expect(baseElement).toBeTruthy();
  });
});
