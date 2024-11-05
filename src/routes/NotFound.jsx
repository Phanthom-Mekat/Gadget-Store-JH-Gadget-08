import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 pb-20">
            <div className="">
                <img
                    src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788958.jpg?ga=GA1.1.143626560.1657375020&semt=ais_hybrid"
                    alt="Page Not Found"
                    className="w-96 h-auto"
                />
            </div>
            <p className="text-gray-600 mt-2 text-lg">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                to="/"
                className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-300 transition"
            >
                <FaHome className="mr-2" />
                Go Back Home
            </Link>


        </div>
    );
};

export default NotFound;
