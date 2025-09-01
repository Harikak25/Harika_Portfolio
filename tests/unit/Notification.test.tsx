import { render, screen, fireEvent } from '@testing-library/react';
import Notification from '@/components/mac/Notification';
test('Notification click + close',()=>{const c=jest.fn();const x=jest.fn();render(<Notification title='T' body='B' onClick={c} onClose={x}/>);fireEvent.click(screen.getByText('B'));expect(c).toHaveBeenCalled();fireEvent.click(screen.getByText('×'));expect(x).toHaveBeenCalled();});
