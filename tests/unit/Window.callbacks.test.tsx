import { render, fireEvent } from '@testing-library/react';
import Window from '@/components/mac/window/Window';

test('calls onClose when close button clicked', () => {
  const onClose = jest.fn();
  const { getByTitle } = render(
    <Window id="x" title="Win" onClose={onClose} onFocus={()=>{}}>
      <div>body</div>
    </Window>
  );
  fireEvent.click(getByTitle('Close'));
  expect(onClose).toHaveBeenCalled();
});

test('calls onFocus when window clicked', () => {
  const onFocus = jest.fn();
  const { container } = render(
    <Window id="y" title="Win" onClose={()=>{}} onFocus={onFocus}>
      <div>body</div>
    </Window>
  );
  fireEvent.mouseDown(container.firstChild as Element);
  expect(onFocus).toHaveBeenCalled();
});