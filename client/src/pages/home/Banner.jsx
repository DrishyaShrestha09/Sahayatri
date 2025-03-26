import { useNavigate } from "react-router-dom";
import banner from "../../assets/childrens.jpg";
import { useAuth } from '../../context/AuthContext';
// yedi user registered xaina ra user le make a difference btn ma click garo vane login page ma lagxa if logged in xa vane aauta alert msz dekhauxa for now.
const Banner = () => {  
const navigate = useNavigate();
const {currentUser, loading} = useAuth();

const handleMakeDifference = () => {
  if (loading) return;
  
  if (currentUser) {
    alert("🎉 Thank you for being part of the change! You are already making a difference. Keep supporting and inspiring others!");
  } else {
    navigate("/login");
    alert("🔒 Please log in to start making a difference. Join us in creating a better future! ✨");
  }
};


  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="images md:w-1/2 w-full flex items-center md:justify-end">
        <img src={banner} alt="" className="rounded-[40px]" />
      </div>

      <div className="texts md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Welcome to Sahayatri!
        </h1>
        <p className="mb-10">
          At Sahayatri, we believe in the power of community and the incredible
          impact we can make when we come together for a cause. This platform is
          dedicated to bringing meaningful campaigns to life, where only trusted
          admins create and manage projects that have the potential to change
          lives. Join us in supporting those who dare to dream big, and let&apos;s
          build a future where every contribution, no matter how small, creates
          lasting change.
        </p>

        <button 
        onClick={handleMakeDifference} 
        className="btn-primary">
          Make a Difference
        </button>
      </div>
    </div>
  );
};

export default Banner;
