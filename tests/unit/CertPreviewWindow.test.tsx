import { render, screen } from '@testing-library/react';
import CertPreviewWindow from '@/components/windows/CertPreviewWindow';
test('CertPreviewWindow shows download',()=>{render(<CertPreviewWindow id='cp' style={{}} onClose={()=>{}} onFocus={()=>{}} file='/certs/CertA.pdf'/>);expect(screen.getByText('Download')).toBeInTheDocument();});
