import { render } from '@testing-library/react';

import Recommend from './recommend';

describe('Recommend', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Recommend />);
		expect(baseElement).toBeTruthy();
	});
});
