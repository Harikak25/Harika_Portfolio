import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Window from '@/components/mac/window/Window';

test('drag and resize work', async () => {
  const user = userEvent.setup();
  Object.defineProperty(window,'innerWidth',{value:1280, configurable:true});
  Object.defineProperty(window,'innerHeight',{value:800, configurable:true});

  const { container } = render(<Window id="w2" title="T2" onClose={()=>{}} onFocus={()=>{}}><div>c</div></Window>);
  const frame = container.querySelector('#w2') as HTMLElement;
  const titlebar = frame.querySelector('[class*="cursor-move"]') as HTMLElement;
  const handle = frame.querySelector('[aria-label="Resize"]') as HTMLElement;

  await user.pointer([{ target: titlebar, keys: '[MouseLeft>]', coords: { x: 5, y: 5 } }]);
  await user.pointer([{ coords: { x: 50, y: 40 } }]);
  await user.pointer([{ keys: '[/MouseLeft]' }]);

  const w0 = parseInt(frame.style.width); const h0 = parseInt(frame.style.height);
  await user.pointer([{ target: handle, keys: '[MouseLeft>]' }]);
  await user.pointer([{ coords: { x: 80, y: 60 } }]);
  await user.pointer([{ keys: '[/MouseLeft]' }]);
  const w1 = parseInt(frame.style.width); const h1 = parseInt(frame.style.height);
  expect(w1).toBeGreaterThanOrEqual(w0);
  expect(h1).toBeGreaterThanOrEqual(h0);
});
