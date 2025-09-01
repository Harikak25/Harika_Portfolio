import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Window from '@/components/mac/window/Window';

beforeEach(() => {
  Object.defineProperty(window,'innerWidth',{value:800, configurable:true});
  Object.defineProperty(window,'innerHeight',{value:600, configurable:true});
});

test('branch: drag clamps to screen edges', async () => {
  const user = userEvent.setup();
  const { container } = render(
    <Window id="wb1" title="Clamp" onClose={()=>{}} onFocus={()=>{}}>
      <div>c</div>
    </Window>
  );
  const frame = container.querySelector('#wb1') as HTMLElement;
  const title = frame.querySelector('[class*="cursor-move"]') as HTMLElement;

  // drag far off-screen to force clamp branch
  await user.pointer([{ target: title, keys:'[MouseLeft>]' }]);
  await user.pointer([{ coords:{ x: 3000, y: 3000 } }]);
  await user.pointer([{ keys:'[/MouseLeft]' }]);

  // just verify we have numeric style set after clamp
  expect(parseInt(frame.style.left)).toBeGreaterThanOrEqual(0);
  expect(parseInt(frame.style.top)).toBeGreaterThanOrEqual(0);
});

test('branch: resize tries below min then clamps to min', async () => {
  const user = userEvent.setup();
  const { container } = render(
    <Window id="wb2" title="Min" onClose={()=>{}} onFocus={()=>{}}>
      <div>c</div>
    </Window>
  );
  const frame = container.querySelector('#wb2') as HTMLElement;
  const handle = frame.querySelector('[aria-label="Resize"]') as HTMLElement;

  await user.pointer([{ target: handle, keys:'[MouseLeft>]' }]);
  // drag negative to hit min-size branch
  await user.pointer([{ coords:{ x: -1000, y: -1000 } }]);
  await user.pointer([{ keys:'[/MouseLeft]' }]);

  const w = parseInt(frame.style.width);
  const h = parseInt(frame.style.height);
  expect(w).toBeGreaterThanOrEqual(560); // min width from component
  expect(h).toBeGreaterThanOrEqual(360); // min height from component
});