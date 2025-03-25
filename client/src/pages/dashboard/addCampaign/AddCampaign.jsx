import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useForm } from "react-hook-form";
import { useAddCampaignMutation } from "../../../redux/features/campaigns/campaignsApi";
import Swal from 'sweetalert2';

const AddCampaign = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFile, setimageFile] = useState(null);
  const [imageFileName, setimageFileName] = useState('');
  const [addCampaign, { isLoading, isError }] = useAddCampaignMutation();

  const onSubmit = async (data) => {

    const newCampaignData = {
        ...data,
        coverImage: imageFileName,
    }
    try {
        await addCampaign(newCampaignData).unwrap();
        Swal.fire({
            title: "Created campaign",
            text: "Campaign created successfully",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Okay!"
          });
          reset();
          setimageFileName('');
          setimageFile(null);
    } catch (error) {
        console.error(error);
        alert("failed to add campaign. Please try again")
    }
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file);
      setimageFileName(file.name);
    }
  };


  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Campaign</h2>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Input */}
        <InputField
          label="Title"
          name="title"
          placeholder="Enter campaign title"
          register={register}
        />

        {/* Reusable Textarea for Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Enter campaign description"
          type="textarea"
          register={register}
        />

        {/* Category Select */}
        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Fundraising for' },
            { value: 'medical', label: 'Medical' },
            { value: 'education', label: 'Education' },
            { value: 'charity', label: 'Charity' },
            { value: 'startups', label: 'Startups' },
            { value: 'research', label: 'Research' },
          ]}
          register={register}
        />

        {/* Emergency Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('emergency')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Emergency</span>
          </label>
        </div>

        {/* Fund Required Input */}
        <InputField
          label="Fund Required"
          name="fundRequired"
          type="number"
          placeholder="Fund Required"
          register={register}
        />

        {/* fund raised */}
        <InputField
          label="Fund Raised"
          name="fundRaised"
          type="number"
          placeholder="Fund Raised"
          register={register}
        />

        {/* Cover Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange} 
            className="mb-2 w-full"
          />
          {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
        >
          {isLoading ? <span>Adding...</span> : <span>Add Campaign</span>}
        </button>
      </form>
    </div>
  );
};

export default AddCampaign;
