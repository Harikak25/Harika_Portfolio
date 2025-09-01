import { render, screen } from '@testing-library/react';
import ResumeWindow from '@/components/windows/ResumeWindow';
test('ResumeWindow has download',()=>{render(<ResumeWindow id='r' title='Resume.pdf' style={{}} onClose={()=>{}} onFocus={()=>{}}/>);expect(screen.getByText('Download')).toBeInTheDocument();});
