import { render, screen, waitFor } from '@testing-library/react';
import CertsWindow from '@/components/windows/CertsWindow';
beforeEach(()=>{global.fetch=jest.fn().mockResolvedValue({json:()=>Promise.resolve({files:[{name:'CertA.pdf',href:'/certs/CertA.pdf'}]})});});
test('CertsWindow lists files',async()=>{render(<CertsWindow id='c' title='Certifications' style={{}} onClose={()=>{}} onFocus={()=>{}} onOpenCert={()=>{}}/>);await waitFor(()=>expect(screen.getByText('CertA.pdf')).toBeInTheDocument());});
