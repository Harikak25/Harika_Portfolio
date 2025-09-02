import { render, screen } from '@testing-library/react';
import ProjectsWindow from '@/components/windows/ProjectsWindow';

test('ProjectsWindow renders project cards', () => {
  render(<ProjectsWindow id='p' title='Projects' style={{}} onClose={() => {}} onFocus={() => {}} />);
  
  // Check for the updated project titles
  expect(screen.getByText('BCBS Contract Intelligence Platform')).toBeInTheDocument();
  expect(screen.getByText('Synchrony Financial Risk Detection Engine')).toBeInTheDocument();
  expect(screen.getByText('RedBus Dynamic Pricing Intelligence')).toBeInTheDocument();
});