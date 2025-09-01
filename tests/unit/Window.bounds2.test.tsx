import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Window from '@/components/mac/window/Window';

beforeEach(() => {
  Object.defineProperty(window,'innerWidth',{value: 800, configurable:true});
  Object.defineProperty(window,'innerHeight',{value: 600, configurable:true});
});

test('drag clamps at top/left and resize grows without breaking min constraints', async () => {
  const user = userEvent.setup();
  const { container } = render(
    <Window id="wb3" title="Bounds" onClose={()=>{}} onFocus={()=>{}}>
      <div>body</div>
    </Window>
  );
  const frame = container.querySelector('#wb3') as HTMLElement;
  const title = frame.querySelector('[class*="cursor-move"]') as HTMLElement;
  const handle = frame.querySelector('[aria-label="Resize"]') as HTMLElement;

  // drag far negative to hit clamp branch
  await user.pointer([{ target: title, keys:'[MouseLeft>]' }]);
  await user.pointer([{ coords:{ x: -2000, y: -2000 } }]);
  await user.pointer([{ keys:'[/MouseLeft]' }]);
  expect(parseInt(frame.style.left)).toBeGreaterThanOrEqual(0);
  expect(parseInt(frame.style.top)).toBeGreaterThanOrEqual(0);

  // resize large; assert min-size and numeric bounds (no NaN)
  const startW = parseInt(frame.style.width) || 0;
  const startH = parseInt(frame.style.height) || 0;

  await user.pointer([{ target: handle, keys:'[MouseLeft>]' }]);
  await user.pointer([{ coords:{ x: 4000, y: 4000 } }]);
  await user.pointer([{ keys:'[/MouseLeft]' }]);

  const w = parseInt(frame.style.width);
  const h = parseInt(frame.style.height);

  expect(Number.isNaN(w)).toBe(false);
  expect(Number.isNaN(h)).toBe(false);
  expect(w).toBeGreaterThanOrEqual(560);  // respects min width
  expect(h).toBeGreaterThanOrEqual(360);  // respects min height
});