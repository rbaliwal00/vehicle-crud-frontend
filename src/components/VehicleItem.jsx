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
    <div className="mt-6 card w-6/12 bg-teal-700 text-white m-auto">
      <div className="card-body">
        <h2 className="text-xl font-bold border-b">
          Chassis Number - {vehicle.chassis_number}
        </h2>
        <p className="text-md border-b">Registration Number - {vehicle.registration_number}</p>
        <p className="text-md border-b">Kind - {vehicle.kind}</p>
        <p className="text-md border-b">Driven - {vehicle.miles_driven}</p>
        <p className="text-md border-b">Last Inspection - {formatDate(vehicle.last_inspection)}</p>
        <p className="text-md">
          Coordinates - {vehicle.last_location.lat}, {vehicle.last_location.lng}
        </p>
        <div className="">
          <button onClick={() => handleEdit(vehicle)} className="bg-white btn align-left px-6">
            Edit
          </button>
          <button
            onClick={onDelete}
            className={`bg-white btn float-right ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
