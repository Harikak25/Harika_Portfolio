import { render, screen, fireEvent } from '@testing-library/react';
import MessagesWindow from '@/components/mac/imap/MessagesWindow';

test('MessagesWindow switches chats', () => {
  render(<MessagesWindow id='m' style={{}} onClose={() => {}} onFocus={() => {}} />);
  
  // Click on "Tech Stack" chat
  fireEvent.click(screen.getByText('Tech Stack'));
  
  // Verify we can see content from the Tech Stack chat
  expect(screen.getByText(/Cloud: AWS/)).toBeInTheDocument();
});

test('MessagesWindow shows default Harika chat', () => {
  render(<MessagesWindow id='m' style={{}} onClose={() => {}} onFocus={() => {}} />);
  
  // Should show Harika's welcome message by default
  expect(screen.getByText('Hey there! 👋')).toBeInTheDocument();
  expect(screen.getByText(/Welcome to my digital workspace/)).toBeInTheDocument();
});

test('MessagesWindow switches to Connect chat', () => {
  render(<MessagesWindow id='m' style={{}} onClose={() => {}} onFocus={() => {}} />);
  
  // Click on Connect chat
  fireEvent.click(screen.getByText('Connect'));
  
  // Verify we can see Connect chat content
  expect(screen.getByText('Ready to connect?')).toBeInTheDocument();
});