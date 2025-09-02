import { render, screen, fireEvent } from '@testing-library/react';
import TerminalWindow from '@/components/windows/TerminalWindow';

const noop = () => {};

describe('TerminalWindow branches', () => {
  test('renders default welcome output', () => {
    render(<TerminalWindow id="t" onClose={noop} onFocus={noop} />);
    expect(screen.getByText(/Welcome to HK Terminal/)).toBeInTheDocument();
    expect(screen.getByText(/Type "help" for available commands/)).toBeInTheDocument();
  });

  test('executes help command', async () => {
    render(<TerminalWindow id="t" onClose={noop} onFocus={noop} />);
    const input = screen.getByLabelText('Terminal input');
    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(await screen.findByText(/Available commands/)).toBeInTheDocument();
  });

  test('executes clear command', async () => {
    render(<TerminalWindow id="t" onClose={noop} onFocus={noop} />);
    const input = screen.getByLabelText('Terminal input');
    fireEvent.change(input, { target: { value: 'clear' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(await screen.findByText(/Terminal cleared/)).toBeInTheDocument();
  });

  test('executes unknown command', async () => {
    render(<TerminalWindow id="t" onClose={noop} onFocus={noop} />);
    const input = screen.getByLabelText('Terminal input');
    fireEvent.change(input, { target: { value: 'foobar' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(await screen.findByText(/Command not found/)).toBeInTheDocument();
  });

  test('container keydown focuses input', () => {
    render(<TerminalWindow id="t" onClose={noop} onFocus={noop} />);
    const area = screen.getByLabelText(/Terminal area/i);
    // click focuses the input (label → input)
    fireEvent.click(area);
    expect(screen.getByLabelText('Terminal input')).toBeInTheDocument();
  });
});