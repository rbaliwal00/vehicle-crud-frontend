import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import VehicleService from '../services/Vehicle.service';
import VehicleItem from './VehicleItem';

const Home = () => {
    const[vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const[loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        const getVehicles = async () => {
            try{
                const res = await VehicleService.getVehicles();
                console.log(res.data);
                setFilteredVehicles(res.data);
                setVehicles(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getVehicles();
    },[]);

    const handleNameFilterChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filtered = vehicles.filter((vehicle) =>
            vehicle.chassis_number.toLowerCase().includes(searchQuery)
        );
        setFilteredVehicles(filtered);
    };

    const handleNewVehicle = () => {
        navigate('/vehicle');
    }

    const handleDelete = async (chassisNumber) => {
        setLoading(true);
        try {
            await VehicleService.deleteVehicle(chassisNumber);
            const updatedVehicles = vehicles.filter(
                (vehicle) => vehicle.chassis_number !== chassisNumber
            );
            setVehicles(updatedVehicles);
            setFilteredVehicles(updatedVehicles);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <div className=''>
            <h2 className='mt-6  text-2xl font-black text-center'>All Vehicles</h2>
            <div className='mt-8 w-11/12 lg:w-6/12  m-auto'>
                <input type="text" 
                    placeholder="Search Vehicles using Chassis Number" 
                    className="input input-bordered max-w-xs text-xs sm:text-sm w-11/12 lg:w-1/2 "
                    onChange={handleNameFilterChange} />
                <button 
                    onClick={handleNewVehicle}
                    className="bg-white btn text-center ml-2 mt-4 sm:mt-0 sm:float-right border-slate-300">
                        New Vehicle
                </button>
            </div>
            
            {filteredVehicles.map((vehicle) => (
                <VehicleItem 
                    vehicle={vehicle} 
                    key={vehicle._id}
                    loading={loading}
                    onDelete={() => handleDelete(vehicle.chassis_number)}/>
            ))}
        </div>
    );
};

export default Home;