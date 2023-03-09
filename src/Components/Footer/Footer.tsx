import { Box, Link, Typography } from '@mui/material';
import React, { FC } from 'react';

interface FooterProps {
	isMobile: boolean;
}

const Footer: FC<FooterProps> = ({ isMobile }) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			minHeight: '100px',
			width: '100%',
			boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
			marginTop: '5vh',
		},
		col: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
		},
	};
	return (
		<Box sx={style.container}>
			<Box sx={style.col}>
				<Typography variant={isMobile ? 'body1' : 'h6'}>Made with ❤️ by Laurits Bonde</Typography>
				<Typography variant={isMobile ? 'body1' : 'h6'}>© 2023</Typography>
			</Box>
			<Box sx={style.col}>
				<Typography variant={isMobile ? 'body1' : 'h6'}>Contact me!</Typography>
				<Typography variant={isMobile ? 'body1' : 'h6'}>
					<Link href="mailto:lauritsbonde@hotmail.dk?subject=I%20am%20interested!&body=Hi%20Laurits!%0A%0AI'd%20Like%20to%20hear%20more!%0A%0ASincerely" target="_blank">
						Send email
					</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
