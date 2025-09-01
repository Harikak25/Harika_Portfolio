import { render, screen } from '@testing-library/react';
import TerminalWindow from '@/components/windows/TerminalWindow';

test('renders custom title prop too', () => {
  render(<TerminalWindow id="t2" title="Terminal — Demo" onClose={()=>{}} onFocus={()=>{}} />);
  expect(screen.getByText('Terminal — Demo')).toBeInTheDocument();
});