import { render, screen, fireEvent } from '@testing-library/react';
import FinderWindow from '@/components/windows/FinderWindow';
test('FinderWindow double click',()=>{const onOpen=jest.fn();render(<FinderWindow id='f' title='Finder' style={{}} onClose={()=>{}} onFocus={()=>{}} onOpen={onOpen}/>);fireEvent.doubleClick(screen.getByText('Projects'));expect(onOpen).toHaveBeenCalled();});
