import "./Welcome.css";

export default function Welcome() {
    return (
        <>
            <div className="containerWelcome">
                <h1 id="welcome">Welcome!</h1>
                <p id="welcomeMessage1">Welcome fellow book lovers! I see that you are in need of a new book.</p>
                <p id="welcomeMessage2">I'm here to tell you that you've come to the right place! Here we have a list of the top 15 best selling fictions by New York Times.</p>
                <p id="welcomeMessage3">Alright then, please take a seat and get comfy. Maybe brew your favourite beverage, or snuggle your favourite blanket.</p>
                <p id="welcomeMessage4">We'll find one that suits your taste soon enough.</p>
            </div>
        </>
    );
}