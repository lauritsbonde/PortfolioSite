import React, { FC, RefObject } from 'react';
import { Box, Link, Typography } from '@mui/material';

interface ContactProps {
	isMobile: boolean;
	componentRef: RefObject<HTMLDivElement>;
}

const Contact: FC<ContactProps> = ({ isMobile, componentRef }) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100vw',
			marginTop: '5vh',
		},
		underlined: {
			textDecoration: 'underline',
			textDecorationColor: 'orange',
			textUnderlineOffset: '4px',
			textDecorationThickness: '4px',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			marginTop: '5vh',
			maxWidth: '1800px',
		},
	};
	return (
		<Box sx={style.container} ref={componentRef}>
			<Typography variant="h2" sx={style.underlined}>
				Contact Me
			</Typography>
			<Box sx={style.content}>
				<Typography variant="h4">Feel free to contact me if you have any questions or if you want to hear more about me!</Typography>
				<Typography variant="h5" sx={{ marginTop: '2vh' }}>
					Send me an{' '}
					<Link href="mailto:lauritsbonde@hotmail.dk?subject=I%20am%20interested!&body=Hi%20Laurits!%0A%0AI'd%20Like%20to%20hear%20more!%0A%0ASincerely" target="_blank">
						email!
					</Link>
				</Typography>
				<Typography variant="h5" sx={{ marginTop: '2vh' }}>
					Or check out my{' '}
					<Link href="https://www.linkedin.com/in/laurits-bonde-a96b121b9/" target="_blank">
						LinkedIn
					</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default Contact;
