import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import App from './App';
import Navbar from './components/Navbar/Navbar'

test('renders learn react link', () => {
    render(<Navbar />)
});
