import { Box, Button, Typography } from '@mui/material';
import React, { FC, RefObject } from 'react';
import bgImage from '../../Images/background.svg';
import ScrollIcon from './ScrollIcon';

interface StarterProps {
	isMobile: boolean;
	componentRef: RefObject<HTMLDivElement>;
}

const Starter: FC<StarterProps> = ({ isMobile, componentRef }) => {
	const style = {
		container: {
			width: '100vw',
			position: 'relative',
			height: isMobile ? '50vh' : '70vh',
			backgroundImage: `url(${bgImage})`,
			backgroundRepeat: 'repeat',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'top',
			boxSizing: 'border-box',
			paddingTop: isMobile ? '10vh' : '20vh',
			alignItems: 'center',
			textTransform: 'uppercase',
		},
		mobileText: {
			fontSize: '8vw',
			padding: '0 10%',
			textAlign: 'center',
			marginBottom: '5vh',
		},
		text: {
			fontSize: 'clamp(2rem, 5vw, 6rem)',
			marginBottom: '3vh',
		},
		mobileSubText: {
			padding: '0 10%',
			textAlign: 'center',
		},
		subText: {
			fontSize: 'clamp(1.3rem, 1.5vw, 2rem)',
			padding: '0 10%',
			textAlign: 'center',
			maxWidth: '50vw',
		},
		button: {
			marginTop: '5vh',
			fontSize: 'clamp(.8rem, 1.25vw, 1.5rem)',
			fontWeight: 550,
			boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.55)',
		},
	};

	return (
		<Box sx={style.container} ref={componentRef}>
			<Typography variant="h1" sx={isMobile ? style.mobileText : style.text}>
				Hello! I am Laurits Bonde
			</Typography>
			<Typography variant="body1" sx={isMobile ? style.mobileSubText : style.subText}>
				I am a fullstack developer with a passion for creating beautiful and functional web applications.
			</Typography>
			<Button variant="contained" color="primary" sx={style.button}>
				See my work
			</Button>
			<ScrollIcon isMobile={isMobile} />
		</Box>
	);
};

export default Starter;
