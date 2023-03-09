import { Box, Link } from '@mui/material';
import React, { FC } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface LinksProps {
	isMobile: boolean;
}

const Links: FC<LinksProps> = ({ isMobile }) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'fixed',
			zIndex: 10,
			top: isMobile ? '15vh' : '30vh',
			left: isMobile ? '0' : '-12px',
			padding: '10px 20px',
			backgroundColor: '#fff',
			width: '3vw',
			maxWidth: '50px',
			boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.35)',
			'&:hover': {
				left: '0px',
				boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.65)',
			},
			transition: 'left 0.35s ease-out',
		},
		link: {
			cursor: 'pointer',
			padding: '10px',
			'&:hover': {
				backgroundColor: '#f3870148',
				borderRadius: '8px',
			},
		},
	};

	return (
		<Box sx={style.container}>
			<Link href="https://github.com/lauritsbonde" target="_blank" sx={style.link}>
				<GitHubIcon fontSize="large" style={{ color: '#000' }} />
			</Link>
			<Link href="https://www.linkedin.com/in/laurits-bonde-a96b121b9/" target="_blank" sx={style.link}>
				<LinkedInIcon fontSize="large" style={{ color: '#000' }} />
			</Link>
		</Box>
	);
};

export default Links;
