import { render } from '@testing-library/react';

import NotationEdit from './notationEdit';

describe('NotationEdit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotationEdit />);
    expect(baseElement).toBeTruthy();
  });
});
