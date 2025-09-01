import { render, screen, fireEvent } from '@testing-library/react';
import FinderWindow from '@/components/windows/FinderWindow';

test('double-clicks open various items', () => {
  const onOpen = jest.fn();
  render(<FinderWindow id="f" title="Finder" style={{}} onClose={()=>{}} onFocus={()=>{}} onOpen={onOpen} />);
  fireEvent.doubleClick(screen.getByText('Projects'));
  fireEvent.doubleClick(screen.getByText('Certifications'));
  fireEvent.doubleClick(screen.getByText('Resume.pdf'));
  expect(onOpen).toHaveBeenCalledTimes(3);
});