import React, { FC, useEffect, useState } from 'react';
import skills from './skills';
import { Box, Button } from '@mui/material';
import SkillPill from './SkillPill';

interface SkillContainerProps {
	isMobile: boolean;
	colorMap: Map<string, string>;
	setColorMap: (colorMap: Map<string, string>) => void;
}

const SkillContainer: FC<SkillContainerProps> = ({ isMobile, colorMap, setColorMap }) => {
	const [skillTypes, setSkillTypes] = useState<Set<string>>(new Set());
	const [selectedType, setSelectedType] = useState<string>('All');

	useEffect(() => {
		const types = new Set<string>();
		const keys = Object.keys(skills);
		keys.forEach((key) => {
			types.add(skills[key][0]);
		});

		const availableColors = ['#56A7B3', '#BAC1B8', '#0C7C59', '#464C58', '#D64933'];

		const colors = new Map<string, string>();
		Array.from(types).forEach((type, index) => {
			const color =
				index < availableColors.length
					? availableColors[index]
					: '#' +
					  Math.floor(Math.random() * 16777215)
							.toString(16)
							.slice(0, 6);
			colors.set(type, color);
		});
		setSkillTypes(types);
		setColorMap(colors);
	}, [setColorMap]);

	const handleCategoryClick = (type: string) => {
		if (type === selectedType) {
			setSelectedType('All');
		} else {
			setSelectedType(type);
		}
	};

	const style = {
		container: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			marginTop: '.5vh',
		},
		categories: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			marginBottom: '1vh',
		},
		category: {
			margin: '5px',
			fontSize: 'clamp(12px, 1.3vw, 1.5rem)',
			transition: 'all 0.35s ease-out',
		},
		pillsContainer: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
		},
	};

	const categorySelector = (
		<Box sx={style.categories}>
			{skillTypes.size > 0 &&
				Array.from(skillTypes).map((skillType, index) => {
					let color = colorMap.get(skillType);
					if (selectedType !== 'All' && skillType !== selectedType) {
						color = color + '33';
					}
					return (
						<Button
							variant="contained"
							onClick={() => handleCategoryClick(skillType)}
							key={index}
							sx={{ ...style.category, backgroundColor: color, '&:hover': { backgroundColor: colorMap.get(skillType) + 'aa', transform: 'scale(1.05)' } }}
						>
							{skillType}
						</Button>
					);
				})}
		</Box>
	);

	return (
		<Box sx={style.container}>
			{categorySelector}
			{Object.keys(skills).map((skillName, index) => {
				return <SkillPill skillName={skillName} selectedType={selectedType} colorMap={colorMap} key={index} isMobile={isMobile} />;
			})}
		</Box>
	);
};

export default SkillContainer;
