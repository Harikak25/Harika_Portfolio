import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Background from '@/components/mac/Background';

test('renders without warning', async () => {
  await act(async () => {
    render(<Background />);
  });
});