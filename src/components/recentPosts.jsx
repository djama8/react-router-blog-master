function RecentPosts() {
    return (
        <section class="recent">
            <div class="container">
                <div class="recent-header">
                    <h3>Recent posts</h3>
                    <a href="#" class="all">View all</a>
                </div>

                <div class="recent-container">
                    <div class="recent-card-container">
                        <h3>Making a design system from scratch</h3>
                        <div class="description">
                            <p>12 Feb 2020</p>
                            <span class="line"></span>
                            <p>Design, Pattern</p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div class="recent-card-container">
                        <h3>Creating pixel perfect icons in Figma</h3>
                        <div class="description">
                            <p>12 Feb 2020</p>
                            <span class="line"></span>
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

export default RecentPosts;