import { render, screen } from '@testing-library/react';
import Window from '@/components/mac/window/Window';
test('Window shows title/content',()=>{Object.defineProperty(window,'innerWidth',{value:1280,configurable:true});Object.defineProperty(window,'innerHeight',{value:800,configurable:true});render(<Window id='w' title='T' onClose={()=>{}} onFocus={()=>{}}><div>c</div></Window>);expect(screen.getByText('T')).toBeInTheDocument();expect(screen.getByText('c')).toBeInTheDocument();});
