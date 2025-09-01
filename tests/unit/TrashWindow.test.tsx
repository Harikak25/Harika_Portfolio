import { render, screen } from '@testing-library/react';
import TrashWindow from '@/components/windows/TrashWindow';
test('TrashWindow empty',()=>{render(<TrashWindow id='tr' onClose={()=>{}} onFocus={()=>{}}/>);expect(screen.getByText('Trash is empty.')).toBeInTheDocument();});
