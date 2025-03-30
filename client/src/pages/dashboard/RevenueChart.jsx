import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useFetchAllCampaignsQuery } from "../../redux/features/campaigns/campaignsApi.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  // Fetch campaigns data
  const { data, isLoading, error } = useFetchAllCampaignsQuery();

  if (isLoading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data</p>;

  // Ensure data is an array
  const campaigns = Array.isArray(data?.campaigns) ? data.campaigns : [];

  // Prepare data by month
  const monthlyFunds = Array(12).fill(0);

  campaigns.forEach((campaign) => {
    const createdAt = campaign?.createdAt ? new Date(campaign.createdAt) : null;
    if (createdAt instanceof Date && !isNaN(createdAt)) {
      const monthIndex = createdAt.getMonth();
      monthlyFunds[monthIndex] += campaign.fundRaised || 0;
    }
  });

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue (RS)",
        data: monthlyFunds,
        backgroundColor: "rgba(34, 197, 94, 0.7)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Funds Raised Per Month",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Fund Raised</h2>
      <div className="hidden md:block">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RevenueChart;
