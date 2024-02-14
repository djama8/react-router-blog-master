import muchachoImage from '../assets/muchacho.png';

function GreetingsSection() {
    return (
        <div className="container">
            <div class="content">
                <div class="content-left">
                    <h1>Hi, I am John, <br />Creative Technologist</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </p>
                    <button>Download Resume</button>
                </div>
                <div class="content-right">
                    <img src={muchachoImage} alt="John" />
                </div>
            </div>
        </div>
    );
}

export default GreetingsSection;