import FeaturedWorks from "./featuredWorks";
import GreetingsSection from "./greetingsSection";
import RecentPosts from "./recentPosts";

function MainPage() {
    return (
        <main>
            <GreetingsSection />
            <RecentPosts />
            <FeaturedWorks />
        </main>
        
    );
}

export default MainPage;