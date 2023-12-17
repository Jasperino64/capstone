// import { menu } from "../data";
import { useTheme } from "../ThemeContext";
import '../styles/OrderForm.css';
export default function OrderForm() {
    const [theme] = useTheme();
    return (
        <div className={`orderForm ${theme === 'dark' ? 'dark' : ''}`}>
            <h1>Under construction</h1>
        </div>)
}