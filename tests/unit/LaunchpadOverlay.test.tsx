import { render, screen, fireEvent } from '@testing-library/react';
import LaunchpadOverlay from '@/components/mac/LaunchpadOverlay';


test('Escape closes overlay', () => {
  const open = jest.fn(), close = jest.fn();
  render(<LaunchpadOverlay onOpen={open} onClose={close} />);
  const overlay = screen.getByText('Projects').closest('div')!.parentElement!.parentElement!;
  fireEvent.keyDown(overlay, { key: 'Escape' });
  expect(close).toHaveBeenCalled();
});

test('backdrop click closes; app click triggers open', () => {
  const open = jest.fn(), close = jest.fn();
  const { container } = render(<LaunchpadOverlay onOpen={open} onClose={close} />);
  fireEvent.click(screen.getByText('iMessage'));
  expect(open).toHaveBeenCalled();
  fireEvent.click(container.firstChild as Element); // backdrop
  expect(close).toHaveBeenCalled();
});
test('Launchpad open/close',()=>{const open=jest.fn();const close=jest.fn();const {container}=render(<LaunchpadOverlay onOpen={open} onClose={close}/>);fireEvent.click(screen.getByText('Projects'));expect(open).toHaveBeenCalled();fireEvent.click(container.firstChild as Element);expect(close).toHaveBeenCalled();});

