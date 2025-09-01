import { render, screen, fireEvent } from '@testing-library/react';
import MessagesWindow from '@/components/mac/imap/MessagesWindow';
test('MessagesWindow switches chats',()=>{render(<MessagesWindow id='m' style={{}} onClose={()=>{}} onFocus={()=>{}}/>);fireEvent.click(screen.getByText('Recruiter'));expect(screen.getByText('Also interested in your Kafka work.')).toBeInTheDocument();});
