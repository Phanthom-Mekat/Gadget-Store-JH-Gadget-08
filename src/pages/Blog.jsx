
import { FaClock, FaUser, FaTags } from "react-icons/fa";
import ReuseableHero from "../components/detailsPage/ReuseableHero";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Top 10 Gadgets for Tech Enthusiasts in 2024",
            date: "November 1, 2024",
            author: "Admin",
            tags: ["Tech", "Gadgets", "Reviews"],
            excerpt:
                "Explore the most innovative gadgets set to make waves in 2024! From AI-powered devices to sustainable tech, these gadgets redefine convenience and style.",
            image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309648.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 2,
            title: "How to Choose the Perfect Laptop for Every Need",
            date: "October 25, 2024",
            author: "Gadget Guru",
            tags: ["Laptops", "Guides", "Shopping Tips"],
            excerpt:
                "Not all laptops are created equal. Discover the best models tailored to professionals, students, and gamers in our comprehensive buying guide.Keep it.",
            image: "https://img.freepik.com/free-vector/elearning-workspace-concept-illustration_114360-25845.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 3,
            title: "Upcoming Smartphone Trends You Can’t Miss",
            date: "October 15, 2024",
            author: "Tech Trends",
            tags: ["Smartphones", "Trends", "Tech"],
            excerpt:
                "Get ahead of the curve with the latest in smartphone technology. From foldables to AI cameras, here’s what’s set to dominate the market.",
            image: "https://img.freepik.com/free-photo/top-view-set-gadgets-purple-neon-light-blue-background-smartphone-smartwatch-wireless-headphones-wooden-table-copyspace-your-advertising-tech-modern-gadgets_155003-25552.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 4,
            title: "The Rise of Smart Home Devices in 2024",
            date: "September 30, 2024",
            author: "Smart Living",
            tags: ["Smart Home", "IoT", "Lifestyle"],
            excerpt:
                "Smart homes are becoming mainstream. Dive into the latest IoT devices transforming homes into efficient, automated spaces.",
            image: "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 5,
            title: "Wearable Tech: What's New in 2024?",
            date: "September 10, 2024",
            author: "Future Trends",
            tags: ["Wearables", "Fitness", "Health"],
            excerpt:
                "Wearables have evolved far beyond fitness tracking. Discover the latest in health monitoring, communication, and entertainment.yo.",
            image: "https://img.freepik.com/free-vector/smart-technology-line-poster_1284-34719.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 6,
            title: "AI in Everyday Life: How It’s Changing Our World",
            date: "August 22, 2024",
            author: "AI Innovators",
            tags: ["AI", "Innovation", "Future"],
            excerpt:
                "From virtual assistants to automated driving, AI is now a part of our daily routines. Learn about the exciting advancements on the horizon.",
            image: "https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-form-cyborg-bot-brain-robotic-hand-digital-brain_127544-853.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 7,
            title: "The Future of Gaming: What’s New in 2024",
            date: "July 5, 2024",
            author: "Gaming Enthusiasts",
            tags: ["Gaming", "Tech", "Reviews"],
            excerpt:
                "From immersive experiences to virtual reality, the future of gaming is here. Explore the latest trends and innovations. ",
            image: "https://img.freepik.com/free-vector/cute-angry-rhino-gaming-cartoon-vector-icon-illustration-animal-technology-icon-isolated-flat-vector_138676-12451.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 8,
            title: "The Benefits of Gaming on Your Phone",
            date: "June 20, 2024",
            author: "Gamer Buddy",
            tags: ["Gaming", "Tech", "Reviews"],
            excerpt:
                "Gaming on your phone can be a fun and exciting way to spend time with friends. Discover the benefits of gaming on the go. gaming on your phone can be a fun",
            image: "https://img.freepik.com/premium-photo/close-up-man-playing-video-game_1048944-13893353.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",

        },
        {
            id: 9,
            title: "The Future of Work: How Tech is Changing the Office",
            date: "June 5, 2024",
            author: "Work Enthusiasts",
            tags: ["Work", "Tech", "Office"],
            excerpt:
                "The future of work is here. From remote work to virtual offices, learn how tech is transforming the way we work. ",    
            image: "https://img.freepik.com/free-photo/industrial-designers-working-3d-model_23-2149370109.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
        {
            id: 10,
            title: "The Future of Work: How Tech is Changing the Office",
            date: "June 5, 2024",
            author: "Work Enthusiasts",
            tags: ["Work", "Tech", "Office"],
            excerpt:
                "The future of work is here. From remote work to virtual offices, learn how tech is transforming the way we work. aa",
            image: "https://img.freepik.com/free-photo/portrait-woman-office-prepared-summer-holiday_23-2148204472.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid",
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Blog | Tech Insights & Reviews</title>
                <meta name="description" content="Tech Insights & Reviews" />
            </Helmet>
            <ReuseableHero header="Tech Insights & Reviews" />
            <section className="relative -top-64 w-11/12 mx-auto">
                
                <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 drop-shadow-lg">
                    {blogPosts.map(post => (
                        <div key={post.id} className="border rounded-lg shadow-md p-5 bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                            <div className="flex items-center text-gray-500 mb-4 space-x-4 text-sm">
                                <p className="flex items-center"><FaClock className="mr-1" /> {post.date}</p>
                                <p className="flex items-center"><FaUser className="mr-1" /> {post.author}</p>
                            </div>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <div className="flex gap-2 items-center mb-4">
                                <FaTags className="text-gray-500 mr-2" />
                                {post.tags.map(tag => (
                                    <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <button className="btn text-primary btn-outline border-2 hover:bg-primary hover:text-white    btn-block">Read More</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
