import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [search] = useSearchParams();
    const dataQuery = search.get("data");
    const [data, setData] = useState({});

    useEffect(() => {
        const resData = atob(dataQuery);
        const resObject = JSON.parse(resData);
        console.log(resObject);
        setData(resObject);
    }, [search]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10 text-green-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
                    <p className="text-gray-600">Thank you for saving a cause</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-600">Amount Paid:</span>
                        <span className="font-bold text-gray-800">Rs. {data.total_amount || '0.00'}</span>
                    </div>
                </div>

                <button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    onClick={() => window.location.href = '/'}
                >
                    Return to Home
                </button>
            </div>
        </div>
    )
}

export default PaymentSuccess;