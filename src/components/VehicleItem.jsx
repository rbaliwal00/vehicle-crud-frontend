import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const VehicleItem = ({ vehicle, onDelete, loading }) => {
  const navigate = useNavigate();

  const handleEdit = (vehicle) => {
    navigate('/vehicle', { state: vehicle });
  };

  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  };

  return (
    <div className="mt-4 p-4 card w-11/12 lg:w-6/12 bg-teal-700 text-white m-auto">
      <div className="">
        <h2 className="text-md sm:text-xl font-bold border-b">
          Chassis Number - {vehicle.chassis_number}
        </h2>
        <p className="text-sm sm:text-md border-b">Registration Number - {vehicle.registration_number}</p>
        <p className="text-sm sm:text-md border-b">Kind - {vehicle.kind}</p>
        <p className="text-sm sm:text-md border-b">Driven - {vehicle.miles_driven}</p>
        <p className="text-sm sm:text-md border-b">Last Inspection - {formatDate(vehicle.last_inspection)}</p>
        <p className="text-sm sm:text-md">
          Coordinates - {vehicle.last_location.lat}, {vehicle.last_location.lng}
        </p>
        <div className="mt-2">
          <button onClick={() => handleEdit(vehicle)} 
            className="bg-white text-black font-medium px-6 py-1 rounded-md hover:bg-gray-300">
            Edit
          </button>
          <button
            onClick={onDelete}
            className={`bg-white text-black font-medium px-2 sm:px-6 py-1 rounded-md hover:bg-gray-300 float-right ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
