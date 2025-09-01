import { render, screen } from '@testing-library/react';
import NotesWindow from '@/components/windows/NotesWindow';
test('NotesWindow intro present',()=>{render(<NotesWindow id='n' title='Notes' style={{}} onClose={()=>{}} onFocus={()=>{}}/>);expect(screen.getByText("Hi, I'm Harika 👋")).toBeInTheDocument();});
