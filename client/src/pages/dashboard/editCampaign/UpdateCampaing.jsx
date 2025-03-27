import { useEffect } from "react";
import Loading from "../../../components/Loading";
import { useFetchCampaignByIDQuery, useUpdateCampaignMutation } from "../../../redux/features/campaigns/campaignsApi";
import InputField from "../addCampaign/InputField";
import SelectField from "../addCampaign/SelectField";
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const { id } = useParams();
    const { data: campaignData, isLoading, isError, refetch } = useFetchCampaignByIDQuery(id);
    const [updateCampaign] = useUpdateCampaignMutation();
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (campaignData) {
            setValue('title', campaignData.title);
            setValue('description', campaignData.description);
            setValue('category', campaignData.category);
            setValue('emergency', campaignData.emergency);
            setValue('fundRequired', campaignData.fundRequired);
            setValue('fundRaised', campaignData.fundRaised);
            setValue('coverImage', campaignData.coverImage);
        }
    }, [campaignData, setValue]);

    const onSubmit = async (data) => {
        try {
            await updateCampaign({ id, ...data });
            Swal.fire({
                        title: "Updated campaign",
                        text: "Campaign Updated successfully",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Okay!"
                      });
                      await refetch();
        } catch (error) {
            console.error("Error updating campaign:", error);
            alert('Failed to update campaign');
        }
    };

    if (isLoading) return <Loading />;
    if (isError) return <div>Error fetching campaign data</div>;

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Campaign</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter campaign title"
                    register={register}
                />

                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter campaign description"
                    type="textarea"
                    register={register}
                />

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

                <InputField
                    label="Fund Required"
                    name="fundRequired"
                    type="number"
                    placeholder="Fund required"
                    register={register}
                />

                <InputField
                    label="Fund Raised"
                    name="fundRaised"
                    type="number"
                    placeholder="Fund raised"
                    register={register}
                />

                <InputField
                    label="Cover Image URL"
                    name="coverImage"
                    type="text"
                    placeholder="Cover Image URL"
                    register={register}
                />

                <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
                    Update Campaign
                </button>
            </form>
        </div>
    );
};

export default UpdateCampaign;
