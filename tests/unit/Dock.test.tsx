import { render, screen, fireEvent } from '@testing-library/react';
import Dock from '@/components/mac/Dock';
const h={onFinder:jest.fn(),onLaunchpad:jest.fn(),onNotes:jest.fn(),onMessages:jest.fn(),onTerminal:jest.fn(),onTrash:jest.fn()};
test('Dock Finder click',()=>{render(<Dock {...h}/>);fireEvent.click(screen.getByText('Finder'));expect(h.onFinder).toHaveBeenCalled();});
