import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <section
            style={{ textAlign: 'center', width: 'max-content', margin: 'auto', border: "1px solid var(--primary-green)", height: "100vh" }}>
            <h1 style={{ marginBottom: '8px', color: 'var(--primary-green)' }} className="section-title">We got your reservation.</h1>
            <p style={{ width: '260px', margin: 'auto' }} className="paragraph">Please check your email for booking details.
            </p>
            <button aria-label="back to main" title="Go back to Little Lemon" style={{ marginTop: '75px' }} className="lead-text yellow-rounded" onClick={() => navigate('/')}>Go home</button>
        </section>
    )
};
