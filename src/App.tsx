import React, { useState, useRef, RefObject, useCallback } from 'react';
import { useEffect } from 'react';
import Header from './Components/Universal/Header';
import MuiThemeProvider from './Theming/MuiThemeprovider';
import Links from './Components/Universal/Links';
import Starter from './Components/Starter/Starter';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import SchoolCourses from './Components/SchoolCourses/SchoolCourses';
import Contact from './Components/Contact/Contact';

function App() {
	const [windowSize, setWindowSize] = useState(window.outerWidth || 1000);
	console.log('windowSize: ', windowSize);
	const [skillColorMap, setSkillColorMap] = useState<Map<string, string>>(new Map());

	const starterRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const schoolCoursesRef = useRef(null);
	const contactRef = useRef(null);

	const handleWindowSizeChange = () => {
		setWindowSize(window.outerWidth);
	};

	const updateColorMap = useCallback((colorMap: Map<string, string>) => {
		setSkillColorMap(colorMap);
	}, []);

	useEffect(() => {
		// Update the document title using the browser API
		document.title = `Laurits Bonde`;
		window.addEventListener('resize', handleWindowSizeChange, { passive: true });
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	});

	const gotoSegment = (segment: RefObject<HTMLElement>) => {
		if (segment.current) {
			window.scrollTo({
				top: segment.current?.offsetTop - 120, //the header is 100px high
				behavior: 'smooth',
				// You can also assign value "auto"
				// to the behavior parameter.
			});
		}
	};

	const isMobile = windowSize < 700;

	return (
		<MuiThemeProvider>
			<Header isMobile={isMobile} gotoSection={gotoSegment} refs={[starterRef, aboutRef, projectsRef, schoolCoursesRef, contactRef]} />
			<Links isMobile={isMobile} />
			<Starter isMobile={isMobile} componentRef={starterRef} gotoSegment={() => gotoSegment(projectsRef)} />
			<About isMobile={isMobile} colorMap={skillColorMap} setColorMap={updateColorMap} componentRef={aboutRef} />
			<Projects isMobile={isMobile} colorMap={skillColorMap} componentRef={projectsRef} />
			<SchoolCourses isMobile={isMobile} colorMap={skillColorMap} componentRef={schoolCoursesRef} />
			<Contact isMobile={isMobile} componentRef={contactRef} />
			<Footer isMobile={isMobile} />
		</MuiThemeProvider>
	);
}

export default App;
