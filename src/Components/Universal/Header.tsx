import { Box, Typography, AppBar, Avatar, Menu, MenuItem, Button } from '@mui/material';
import React, { FC, RefObject } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HandymanIcon from '@mui/icons-material/Handyman';
import PhoneIcon from '@mui/icons-material/Phone';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import Laurits from '../../Images/Laurits.png';

interface HeaderProps {
	isMobile: boolean;
	gotoSection: (section: RefObject<HTMLElement>) => void;
	refs: RefObject<HTMLElement>[];
}

const Header: FC<HeaderProps> = ({ isMobile, gotoSection, refs }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const style = {
		container: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '100px',
			width: '100%',
			backgroundColor: '#fff',
			color: '#000',
			padding: isMobile ? '0 8px' : '0 20px',
			position: 'sticky',
		},
		nameAndImg: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'left',
			alignItems: 'center',
			flex: isMobile ? 3 : 1,
		},
		menu: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'right',
			alignItems: 'center',
			flex: isMobile ? 1 : 3,
		},
		menuItem: {
			padding: '0 2.5vw',
		},
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	interface HeaderTypographyProps {
		variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'inherit' | undefined;
		styling?: {
			[key: string]: any;
		};
		text: string;
		section: RefObject<HTMLElement>;
	}

	const HeaderTypography: FC<HeaderTypographyProps> = ({ variant, styling, text, section }) => {
		return (
			<Typography
				variant={variant}
				sx={{
					...styling,
					'&:hover': {
						color: 'primary.main',
						cursor: 'pointer',
					},
					transition: 'color 0.2s ease-in-out',
				}}
				onClick={() => gotoSection(section)}
			>
				{text}
			</Typography>
		);
	};

	const fullSizeMenu = (
		<Box sx={style.menu}>
			<HeaderTypography variant="h4" styling={style.menuItem} text="About" section={refs[1]} />
			<HeaderTypography variant="h4" styling={style.menuItem} text="Projects" section={refs[2]} />
			<HeaderTypography variant="h4" styling={style.menuItem} text="School Courses" section={refs[3]} />
			<HeaderTypography variant="h4" styling={style.menuItem} text="Contact" section={refs[4]} />
		</Box>
	);

	const mobileMenu = (
		<Box sx={{ margin: 0, padding: 0 }}>
			<Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
				<MenuRoundedIcon sx={{ color: '#000' }} fontSize="large" />
			</Button>
			<Menu
				sx={{ margin: 0, padding: 0 }}
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<HomeIcon />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<InfoIcon />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<HandymanIcon />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<PhoneIcon />
				</MenuItem>
			</Menu>
		</Box>
	);

	return (
		<AppBar sx={style.container}>
			<Box sx={style.nameAndImg}>
				<Avatar alt="Laurits Bonde" src={Laurits} sx={{ backgroundColor: 'orange', width: '42px', height: '42px' }} />
				<HeaderTypography variant="h2" styling={{ marginLeft: '10px' }} text="Laurits Bonde" section={refs[0]} />
			</Box>
			{isMobile ? mobileMenu : fullSizeMenu}
		</AppBar>
	);
};

export default Header;
