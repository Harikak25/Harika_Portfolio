import { render, screen } from '@testing-library/react';
import NotesWindow from '@/components/windows/NotesWindow';

test('NotesWindow shows terminal guide', () => {
  render(<NotesWindow id='n' title='Notes' style={{}} onClose={() => {}} onFocus={() => {}} />);
  
  // Check for the main heading
  expect(screen.getByText('🚀 Terminal Commands')).toBeInTheDocument();
  
  // Check for command examples
  expect(screen.getByText('whoami')).toBeInTheDocument();
  expect(screen.getByText('ls skills/')).toBeInTheDocument();
  
  // Check for the guide text
  expect(screen.getByText(/Open Terminal from the dock/)).toBeInTheDocument();
});