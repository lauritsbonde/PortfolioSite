import React, {FC} from 'react';
import {Box, Typography, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import {Semester, Course} from './semesters';
import SkillPill from '../About/SkillPill';

interface SemesterTableProps {
	isMobile: boolean;
	semester: Semester;
	colorMap: Map<string, string>;
}

const SemesterTable: FC<SemesterTableProps> = ({isMobile, semester, colorMap}) => {
	const style = {
		container: {
			width: isMobile ? '95%' : '85%',
			marginTop: '2vh',
			marginBottom: '2vh',
			maxWidth: '1800px',
		},
		tableHead: {
			backgroundColor: 'orange',
			width: '100%',
		},
		skillCell: {
			width: '50%',
		},
		skillContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
		},
		headerRow: {
			width: '100%',
			borderTop: 'none',
			margin: 0,
			padding: 0,
		},
		courseCell: {
			width: '33%',
		},
		mobileCourseCell: {
			width: '33%',
			padding: '0 ',
		},
		learnedCell: {
			width: '50%',
			textAlign: 'center',
		},
		courseRow: {
			width: '100%',
		},
		passedCell: {
			width: '17%',
			textAlign: 'center',
		},
	};

	return (
		<Box sx={style.container}>
			<Table>
				<TableHead sx={style.tableHead}>
					<TableRow sx={{borderBottom: 'none', margin: 0, padding: 0}}>
						<TableCell colSpan={3} sx={{borderBottom: 'none', margin: 0, padding: '.5% 1%'}}>
							<Typography variant="h4">
								{semester.level} - {semester.name}
							</Typography>
							<Typography variant="body1">
								{semester.startDate.toLocaleDateString()} to {semester.endDate.toLocaleDateString()}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow sx={style.headerRow}>
						<TableCell variant="head" sx={{...style.courseCell, padding: '1%'}}>
							<Typography variant="h5">Courses</Typography>
						</TableCell>
						<TableCell sx={{...style.learnedCell, padding: '1%'}}>
							<Typography variant="h5">Learned</Typography>
						</TableCell>
						<TableCell variant="head" sx={{...style.passedCell, padding: '1%'}}>
							<Typography variant="h5">Passed</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody sx={{borderBottom: '2px solid lightgrey'}}>
					{semester.courses.map((course: Course, i) => {
						return (
							<TableRow key={`${course.id}-${i}`} sx={style.courseRow}>
								<TableCell sx={isMobile ? style.mobileCourseCell : style.courseCell}>
									<Typography variant={isMobile ? 'body1' : 'h6'}>{course.name}</Typography>
								</TableCell>
								<TableCell sx={style.skillCell}>
									<Box sx={style.skillContainer}>
										{course.learned.map((skill, i) => {
											return <SkillPill skillName={skill} selectedType={undefined} colorMap={colorMap} key={`${course.id}-${skill}`} isMobile={isMobile} />;
										})}
									</Box>
								</TableCell>
								<TableCell sx={style.passedCell}>
									<Typography variant="h6">{course.passed ? 'Yes' : 'In Progress'}</Typography>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Box>
	);
};

export default SemesterTable;
