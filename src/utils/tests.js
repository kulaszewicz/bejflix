import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { render } from '@testing-library/react';
import theme from '~/configs/theme';

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export const mockNextUseRouter = ({ asPath, pathname, query, route }) => {
  useRouter.mockImplementation(() => ({
    asPath,
    pathname,
    query,
    route,
  }));
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
