import { menu } from '../data';
import '../styles/Specials.css';



export default function Specials() {
    return (
        <main id="specials">
            <h2>Specials</h2>
            <section id="specials-wrapper">
                {
                    menu.map((special) => (
                        <Card name={special.name} price={special.price} key={special.id}
                            description={special.description} src={special.src} />
                    ))
                }
            </section>
        </main>
    )
}



function Card({ name, price, description, src }) {
    return (
        <article className="specials-card">
            <img src={src} alt={`Specials dish: ${name}`} />
            <p className="lead-text">{name} <span className="price">${price}</span></p>
            <p className="paragraph specials-description">{description}</p>
        </article>
    )
}