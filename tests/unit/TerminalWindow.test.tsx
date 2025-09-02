import { render, screen } from '@testing-library/react';
import TerminalWindow from '@/components/windows/TerminalWindow';

test('renders Terminal window title', () => {
  render(<TerminalWindow id="t" onClose={()=>{}} onFocus={()=>{}} />);
  expect(screen.getByText('Terminal')).toBeInTheDocument();
});
