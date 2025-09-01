import { render, screen } from '@testing-library/react';
import BootScreen from '@/components/mac/BootScreen';
test('BootScreen shows logo',()=>{render(<BootScreen/>);expect(screen.getByAltText('logo')).toBeInTheDocument();});
