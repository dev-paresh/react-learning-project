
import '../App.css';

export const Body = () => {
    return (
        <div className="body-container">
            <h1 className="body-title">Welcome to Our Animated World</h1>
            <p className="body-description">
                Experience the magic of animations and creativity.
                Let your imagination run wild!
            </p>
            <div className="animation-container">
                <div className="bouncing-ball"></div>
            </div>
            <button className="explore-button">Explore More</button>
        </div>
    )
}
