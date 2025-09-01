import { render, screen, fireEvent } from '@testing-library/react';
import TerminalWindow from '@/components/windows/TerminalWindow';

test('branch: default title renders', () => {
  render(<TerminalWindow id="tt1" onClose={()=>{}} onFocus={()=>{}} />);
  expect(screen.getByText('Terminal')).toBeInTheDocument();
});

test('branch: custom title prop renders and focus callback fires', () => {
  const onFocus = jest.fn();
  const { container } = render(
    <TerminalWindow id="tt2" title="Terminal — Custom" onClose={()=>{}} onFocus={onFocus} />
  );
  expect(screen.getByText('Terminal — Custom')).toBeInTheDocument();
  fireEvent.mouseDown(container.firstChild as Element);
  expect(onFocus).toHaveBeenCalled();
});