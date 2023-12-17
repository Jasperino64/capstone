import '../styles/Nav.css';
import Logo from './Logo';
import { Link } from "react-router-dom";
import Switch from './Switch';
import { useTheme } from '../ThemeContext';

export default function Nav() {
    const [theme] = useTheme();
    return (
        <nav className={theme === 'dark' ? 'dark' : ''}>
            <ul>
                <li><Link to="/" className={`nav-link section-title ${theme === 'dark' ? 'dark' : ''}`}><Logo /></Link></li>
                <li><Link to="/" className={`nav-link section-title ${theme === 'dark' ? 'dark' : ''}`}>MENU</Link></li>
                <li><Link to="/book" className={`nav-link section-title ${theme === 'dark' ? 'dark' : ''}`}>RESERVE</Link></li>
                <li><Link to="/order" className={`nav-link section-title ${theme === 'dark' ? 'dark' : ''}`}>ORDER</Link></li>
            </ul>
            <Switch />
        </nav>
    )
}