import Image1 from '../assets/work/1.png';
import Image2 from '../assets/work/2.png';
import Image3 from '../assets/work/3.png';

function WorkPageDetailed() {
    return (
        <section className="works work-detailed">
            <div className="container">
                <div className="works-header section-header">
                    <h2>Designing Dashboards with <br /> usability in mind</h2>
                    <div className="description">
                        <div className="date">2018</div>
                        <div className="tag">Components, Design</div>
                    </div>
                </div>

                <p>Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.</p>

                <img src={Image1} alt="1" className="first-img" />
                
                <h3>Heading 1</h3>

                <h4>Heading 2</h4>

                <p>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.</p>

                <img src={Image2} alt="2" />
                <img src={Image3} alt="3" />
            </div>
        </section>
    );
}

export default WorkPageDetailed;