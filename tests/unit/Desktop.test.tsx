import { render, screen, fireEvent } from '@testing-library/react';
import Desktop from '@/components/mac/Desktop';
test('Desktop folders open',()=>{const h={onOpenMessages:jest.fn(),onOpenProjects:jest.fn(),onOpenResume:jest.fn(),onOpenCerts:jest.fn()};render(<Desktop {...h}/>);fireEvent.doubleClick(screen.getByText('Projects'));expect(h.onOpenProjects).toHaveBeenCalled();});
