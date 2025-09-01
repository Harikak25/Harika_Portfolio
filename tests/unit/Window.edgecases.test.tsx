import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Window from '@/components/mac/window/Window';

test('initially centers and enforces min size on resize', async () => {
  const user = userEvent.setup();
  Object.defineProperty(window,'innerWidth',{value:1200, configurable:true});
  Object.defineProperty(window,'innerHeight',{value:800, configurable:true});

  const { container } = render(<Window id="w" title="T" onClose={()=>{}} onFocus={()=>{}}><div>c</div></Window>);
  const frame = container.querySelector('#w') as HTMLElement;
  // Centered-ish
  const left = parseInt(frame.style.left); const top = parseInt(frame.style.top);
  expect(left).toBeGreaterThan(0); expect(top).toBeGreaterThan(0);

  const handle = frame.querySelector('[aria-label="Resize"]') as HTMLElement;
  const startW = parseInt(frame.style.width); const startH = parseInt(frame.style.height);
  await user.pointer([{ target: handle, keys: '[MouseLeft>]' }]);
  // drag negative to try to shrink below min
  await user.pointer([{ coords: { x: -400, y: -400 } }]);
  await user.pointer([{ keys: '[/MouseLeft]' }]);
  const endW = parseInt(frame.style.width); const endH = parseInt(frame.style.height);
  expect(endW).toBeGreaterThanOrEqual(560);
  expect(endH).toBeGreaterThanOrEqual(360);
  // and still numbers
  expect(endW).toBeLessThanOrEqual(startW);
  expect(endH).toBeLessThanOrEqual(startH);
});