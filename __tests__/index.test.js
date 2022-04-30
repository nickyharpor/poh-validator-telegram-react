import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import HCaptchaValidator from '../src/index';

describe('HCaptchaValidator', () => {
  test('renders the HCaptchaValidator in logo only mode', () => {
    const { getByRole } = render(<HCaptchaValidator renderLogoOnly />);
    const imgTag = getByRole('img');
    expect(imgTag).toBeInTheDocument();
    expect(imgTag).toHaveAttribute('src');
    expect(imgTag).toHaveAttribute('alt');
  });
});
