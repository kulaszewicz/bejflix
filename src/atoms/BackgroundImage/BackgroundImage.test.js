import React from 'react';
import { render } from '~/utils/tests';
import BackgroundImage from '.';

describe('(Atom) BackgroundImage', () => {
  it('matches snapshot given the required props', () => {
    const props = {
      src: '/landing-background.jpeg',
    };

    const { container } = render(<BackgroundImage {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="makeStyles-backgroundImage-1 makeStyles-backgroundImage-2"
        />
      </div>
    `);
  });
});
