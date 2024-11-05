import { useState, useEffect } from "react";
import CountUp from "react-countup"; 
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import { Chart as ChartJS, registerables } from 'chart.js';


ChartJS.register(...registerables);


const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Revenue◀▶",
            data: [5000, 10000, 7500, 15000, 20000, 17000],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};


const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const Statistics = () => {
    const [totalUsers, setTotalUsers] = useState(2540);
    const [totalRevenue, setTotalRevenue] = useState(74520);


    useEffect(() => {
        const interval = setInterval(() => {
            setTotalUsers((prev) => prev + Math.floor(Math.random() * 10));
            setTotalRevenue((prev) => prev + Math.floor(Math.random() * 500));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 items-center">
            {/* Header */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Statistics</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <Fade bottom>
                    <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Total Users</h3>
                        <div className="text-4xl font-bold text-primary">
                            <CountUp end={totalUsers} duration={2} />
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Total Revenue</h3>
                        <div className="text-4xl font-bold text-primary">
                            $<CountUp end={totalRevenue} duration={2} />
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Growth Rate</h3>
                        <div className="text-4xl font-bold text-primary">
                            <CountUp end={25.6} decimals={1} suffix="%" duration={2} />
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Chart Section */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-5xl mt-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Revenue Over Time</h3>
                <div className="h-64">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
