import { render } from '@testing-library/react';

import MyRecord from './my-record';

describe('MyRecord', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MyRecord />);
		expect(baseElement).toBeTruthy();
	});
});
