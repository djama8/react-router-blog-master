function BlogPage() {
    return (
        <section className="recent blogs">
            <div className="container">
                <div className="recent-header section-header">
                    <h2>Blog</h2>
                </div>

                <div className="recent-container">
                    <div className="recent-card-container">
                        <h3>Making a design system from scratch</h3>
                        <div className="description">
                            <p>12 Feb 2020</p>
                            <span className="line"></span>
                            <p>Design, Pattern</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div className="recent-card-container">
                        <h3>Creating pixel perfect icons in Figma</h3>
                        <div className="description">
                            <p>12 Feb 2020</p>
                            <span className="line"></span>
                            <p>Figma, Icon Design</p>
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

export default BlogPage;