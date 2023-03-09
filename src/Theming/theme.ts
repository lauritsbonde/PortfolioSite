import { createTheme } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

export type ThemeType = typeof theme;

let theme = createTheme({
	typography: {
		fontFamily: [
			'"Golos Text"',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: green[500],
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				fontFamily: ['Golos Text', 'sans-serif'].join(','),
			},
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 'clamp(2.5rem , 4vw, 3rem)',
					fontWeight: 650,
				},
				h2: {
					fontSize: 'clamp(1.8rem , 3vw, 2.5rem)',
					fontWeight: 600,
				},
				h3: {
					fontSize: 'clamp(1.5rem , 2.75vw, 2rem)',
					fontWeight: 550,
				},
				h4: {
					fontSize: 'clamp(1rem , 2.5vw, 1.8rem)',
					fontWeight: 500,
				},
				h5: {
					fontSize: 'clamp(1rem , 1.7vw, 1.3rem)',
					fontWeight: 450,
				},
				h6: {
					fontSize: 'clamp(1rem , 1.5vw, 1.2rem)',
					fontWeight: 450,
				},
				body1: {
					fontSize: 'clamp(.8rem , 1.2vw, 1.1rem)',
					fontWeight: 400,
				},
				body2: {
					fontSize: 'clamp(.65rem , 1vw, 1rem)',
					fontWeight: 400,
				},
			},
		},
	},
});

// theme = responsiveFontSizes(theme);

export default theme;
