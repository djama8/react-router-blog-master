import work1Image from '../assets/1.png';
import work2Image from '../assets/2.png';
import work3Image from '../assets/3.png';

function FeaturedWorks() {
    return (
        <section className="works">
            <div className="container">
                <div className="works-header">
                    <h3>Featured works</h3>
                </div>
                <div className="works-card-container">
                    <img src={work1Image} alt="1" />
                    <div className="works-card-description">
                        <h3>Designing Dashboards</h3>
                        <div className="description">
                            <div className="date">2020</div>
                            <div className="tag">Dashboard</div>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div className="works-card-container">
                    <img src={work2Image} alt="2" />
                    <div className="works-card-description">
                        <h3>Vibrant Portraits of 2020</h3>
                        <div className="description">
                            <div className="date">2018</div>
                            <div className="tag">Illustration</div>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div className="works-card-container">
                    <img src={work3Image} alt="3" />
                    <div className="works-card-description">
                        <h3>36 Days of Malayalam type</h3>
                        <div className="description">
                            <div className="date">2018</div>
                            <div className="tag">Typography</div>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedWorks;