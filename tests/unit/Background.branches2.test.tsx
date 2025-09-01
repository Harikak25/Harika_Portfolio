import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Background from '@/components/mac/Background';

function mockImage(successOn: 'jpg'|'png'|'none') {
  class ImgMock {
    onload: null | (() => void) = null;
    onerror: null | (() => void) = null;
    set src(v: string) {
      if (successOn==='jpg' && v.includes('background.jpg')) this.onload?.();
      else if (successOn==='png' && v.includes('background.png')) this.onload?.();
      else this.onerror?.();
    }
  }
  // @ts-ignore
  global.Image = ImgMock;
}

test('branch: jpg load', async () => {
  mockImage('jpg');
  await act(async () => {
    render(<Background />);
  });
});

test('branch: png fallback', async () => {
  mockImage('png');
  await act(async () => {
    render(<Background />);
  });
});

test('branch: solid-color fallback', async () => {
  mockImage('none');
  await act(async () => {
    render(<Background />);
  });
});