import React, { FC } from 'react';
import { Box, keyframes } from '@mui/material';

interface ScrollIconProps {
	isMobile: boolean;
}

const ScrollIcon: FC<ScrollIconProps> = ({ isMobile }) => {
	const scroll = keyframes({
		'0%': {
			transform: 'translateY(0px)',
			opacity: 0,
		},
		'20%': {
			transform: 'translateY(0px)',
			opacity: 1,
		},
		'75%': {
			transform: 'translateY(-.6em)',
			opacity: 0.2,
			easing: 'ease-in-out',
		},
		'90%': {
			transform: 'translateY(-.6em)',
			opacity: 0,
		},
		'100%': {
			transform: 'translateY(0)',
			opacity: 0,
			easing: 'ease-in-out',
		},
	});
	const style = {
		example: {
			flex: 1,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		scrollIcon: {
			display: 'block',
			position: 'relative',
			height: isMobile ? '2em' : '3em',
			width: isMobile ? '1em' : '1.5em',
			border: '.25em solid #fff',
			borderRadius: '1em',
		},
		scrollIcon__dot: {
			display: 'block',
			position: 'absolute',
			left: '50%',
			background: '#fff',
			height: isMobile ? '.40em' : '.55em',
			width: isMobile ? '.40em' : '.55em',
			top: '.7em',
			marginLeft: isMobile ? '-.2em' : '-.275em',
			borderRadius: '50%',
			transformOrigin: ' top center',
			backfaceVisibility: 'hidden',
			animation: `1.5s ${scroll} infinite`,
		},
	};
	return (
		<Box sx={{ ...style.example }}>
			<Box sx={style.scrollIcon}>
				<Box sx={style.scrollIcon__dot} />
			</Box>
		</Box>
	);
};

export default ScrollIcon;
