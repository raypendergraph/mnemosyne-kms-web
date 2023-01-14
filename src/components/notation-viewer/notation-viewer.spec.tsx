import { render } from '@testing-library/react';

import NotationViewer from './notation-viewer';

describe('NotationViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotationViewer notationContent=''/>);
    expect(baseElement).toBeTruthy();
  });
});
