import {render, screen} from '@testing-library/react';
import Post from "../components/timeline/Post"

it('Test01 Sidebar Component', () => {
        render(<Post 
            displayName="ホーム" 
            username="kishi" 
            text="test" 
            image="1234567890" 
            avatar="123456789"
            />);
        const test1 = screen.getByText(/ホーム/i);
        const test2= screen.getByText(/kishi/i);
        const test3= screen.getByText(/test/i);
        expect(test1).toBeInTheDocument();
        expect(test2).toBeInTheDocument();
        expect(test3).toBeInTheDocument();

});

