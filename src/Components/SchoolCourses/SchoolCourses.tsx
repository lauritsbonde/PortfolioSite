import { Box, Typography } from '@mui/material';
import React, { FC, RefObject } from 'react';
import semesters, { Semester } from './semesters';
import SemesterTable from './SemesterTable';

interface SchoolCoursesProps {
	isMobile: boolean;
	colorMap: Map<string, string>;
	componentRef: RefObject<HTMLDivElement>;
}

const SchoolCourses: FC<SchoolCoursesProps> = ({ isMobile, colorMap, componentRef }) => {
	const style = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-around',
			width: '100%',
			marginTop: '5vh',
			marginBottom: '5vh',
		},
		underlined: {
			textDecoration: 'underline',
			textDecorationColor: 'orange',
			textUnderlineOffset: '4px',
			textDecorationThickness: '4px',
		},
	};
	return (
		<Box sx={style.container} ref={componentRef}>
			<Typography variant="h2" sx={style.underlined}>
				School Courses
			</Typography>
			{semesters.map((semester: Semester, i) => {
				return <SemesterTable semester={semester} isMobile={isMobile} colorMap={colorMap} key={i} />;
			})}
		</Box>
	);
};

export default SchoolCourses;
