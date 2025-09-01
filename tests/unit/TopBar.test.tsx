import { render, screen } from '@testing-library/react';
import TopBar from '@/components/mac/TopBar';
test('TopBar menus',()=>{render(<TopBar/>);expect(screen.getByText('File')).toBeInTheDocument();});
