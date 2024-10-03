import React, { useState, useEffect } from 'react';
import { getAdminProfiles } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    role: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getAdminProfiles();
        setProfileData({
          username: response.name,
          email: response.email,
          role: 'Administator',
        });
      } catch (error) {
        toast.error('Error fetching profile data');
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading profile data...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{profileData.username}</h2>
          <p className="text-gray-600 dark:text-gray-300">{profileData.email}</p>
          <p className="text-gray-600 dark:text-gray-300">{profileData.role}</p>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <div className="flex flex-col items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md w-full">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Username</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{profileData.username}</p>
            </div>
          </div> */}

          {/* <div className="flex flex-col items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md w-full">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Email               <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{profileData.email}</p></h3>

            </div>
          </div> */}

          {/* <div className="col-span-1 sm:col-span-2 flex flex-col items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md w-full">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Bio : {profileData.role}</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100"></p>
            </div>
          </div> */}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ProfilePage;
