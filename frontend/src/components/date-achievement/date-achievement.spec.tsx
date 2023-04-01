import { render } from '@testing-library/react';

import DateAchievement from './date-achievement';

describe('DateAchievement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateAchievement />);
    expect(baseElement).toBeTruthy();
  });
});
