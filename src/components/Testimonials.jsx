import '../styles/Testimonials.css';


const reviews = [
    { className: "first", name: "Alex", age: 22,
        review: "I had a fantastic brunch at Little Lemon. The avocado toast was seasoned to perfection and the coffee was robust and flavorful. It's a bit more expensive than my usual spots, but the quality justifies the price. I'm eagerly looking forward to my next visit!" },
    { className: "second", name: "Samantha", age: 35,
     review: "As a lawyer, I'm always in need of a quick yet satisfying lunch. Little Lemon has become my favorite spot! The Caesar salad is always fresh and filling, and the service is consistently efficient and friendly. I can't recommend it enough!" },
    { className: "third", name: "Richard", age: 47,
     review: "I recently hosted a business dinner at Little Lemon and was thoroughly impressed. The food was top-notch, especially the lemon tart dessert. The service was attentive without being intrusive, and the restaurant ambiance was conducive to our discussions. I'll certainly be returning!" },
    { className: "fourth", name: "Emily", age: 28, review:
    "I'm a huge fan of Italian cuisine, so I was thrilled to try Little Lemon. The pasta was the star of the meal - perfectly cooked and the sauce was rich and flavorful. The lemon tart was a bit too tangy for my liking, but still enjoyable. Overall, it's a great place for a relaxed dinner with friends." },
]

function TestimonialCard({ name, age, review, className }) {
    return (
        <section className={className}>
            <h4 className="paragraph">"{review}"</h4>
            <p className="lead-text testimonials-description">{name}</p>
            <span className="lead-text span-age">{age}</span>
        </section>
    )
}

export default function Testimonials() {
    return (
        <main id="testimonials">
            <h2>
                What they say about us?
            </h2>
            <section id="testimonials-grid">
                <TestimonialCard {...reviews[0]} />
                <TestimonialCard {...reviews[1]} />
                <TestimonialCard {...reviews[2]} />
                <TestimonialCard {...reviews[3]} />
            </section>
        </main>
    )
}