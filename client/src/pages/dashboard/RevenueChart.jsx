import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useFetchAllCampaignsQuery } from '../../redux/features/campaigns/campaignsApi.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = () => {
  // Fetch campaigns data
  const { data: campaigns, isLoading, error } = useFetchAllCampaignsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  // Prepare data by month
  const monthlyFunds = Array(12).fill(0);

  campaigns?.forEach((campaign) => {
    const monthIndex = new Date(campaign.createdAt).getMonth(); 
    monthlyFunds[monthIndex] += campaign.fundRaised; 
  });

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue (RS)',
        data: monthlyFunds,
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Funds raised per month',
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
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4"> Fund Raised </h2>
      <div className="hidden md:block">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
