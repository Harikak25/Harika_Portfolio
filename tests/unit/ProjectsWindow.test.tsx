import { render, screen } from '@testing-library/react';
import ProjectsWindow from '@/components/windows/ProjectsWindow';
test('ProjectsWindow renders cards',()=>{render(<ProjectsWindow id='p' title='Projects' style={{}} onClose={()=>{}} onFocus={()=>{}}/>);expect(screen.getByText('CANON')).toBeInTheDocument();});
