import React, {FC} from 'react';
import {Box, Typography} from '@mui/material';
import skills, {skill} from './skills';

interface SkillPillProps {
	isMobile: boolean;
	skillName: string;
	selectedType?: string;
	colorMap: Map<string, string>;
}
const SkillPill: FC<SkillPillProps> = ({isMobile, skillName, selectedType, colorMap}) => {
	const style = {
		skill: {
			color: '#fff',
			padding: '5px 10px',
			borderRadius: '8px',
			margin: '2px 3px',
			fontSize: 'clamp(10px, 1.2vw, 1.3rem)',
			fontWeight: 'bold',
			transition: 'all 0.35s ease-out',
			cursor: 'pointer',
			'&:hover': {
				transform: 'scale(1.1)',
			},
		},
	};

	let color = skills[skillName] === undefined ? '#050432' : colorMap.get(skills[skillName][0]);
	if (selectedType !== undefined && selectedType !== 'All') {
		if (skills[skillName][0] === selectedType) {
			color = color + 'ff';
		} else if (skills[skillName].includes(selectedType as skill)) {
			color = color + '85';
		} else {
			color = color + '26';
		}
	}
	return (
		<Box sx={{...style.skill, backgroundColor: color}}>
			<Typography variant={isMobile ? 'body2' : 'body1'}>{skillName}</Typography>
		</Box>
	);
};

export default SkillPill;
