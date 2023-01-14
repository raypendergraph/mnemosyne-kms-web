import { render } from '@testing-library/react';

import NotationEditor from './notation-editor';

describe('NotationEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotationEditor onChange={()=>{}}/>);
    expect(baseElement).toBeTruthy();
  });
});
