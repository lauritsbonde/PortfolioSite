import React, { FC, ReactNode } from 'react';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';

interface MuiThemeproviderProps {
	children: ReactNode;
}

const MuiThemeprovider: FC<MuiThemeproviderProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeprovider;
