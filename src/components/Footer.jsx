import { useNavigate } from "react-router-dom";
import '../styles/Footer.css';
import Logo from './Logo';
import { useTheme } from '../ThemeContext';

export default function Footer() {
    const navigate = useNavigate();
    const [theme] = useTheme();
    return (
        <footer className={theme === 'dark' ? 'dark' : ''}>
            <Logo />
            <li className="paragraph">
                Little Lemon is a charming restaurant that offers a delightful dining experience in a cozy and intimate setting.
            </li>
            <li className="paragraph">
                The restaurant specializes in Mediterranean-inspired cuisine, with a menu that features a range of dishes made with fresh and flavorful ingredients.
            </li>
            <li>
                <button className="yellow-rounded paragraph">Order</button>
                <button className="yellow-rounded paragraph" onClick={() => navigate('/book')}>Reserve</button>
                <button className="yellow-rounded paragraph">Menu</button>
            </li>
        </footer>
    )
}