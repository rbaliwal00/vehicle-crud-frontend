import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import FormInput from './FormInput';
import { inputs } from './inputs';
import VehicleService from '../services/Vehicle.service';

const KIND = ["Light", "Reefer", "Heavy"];


const Vehicle = () => {
    const location = useLocation();
    const[loading, setLoading] = useState(false);
    let { id } = useParams();
    const [kind, setKind] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const[values, setValues] = useState({
        chassisNumber: '',
        registrationNumber: '',
        latitude: '',
        longitude: '',
        driven: '',
        inspection: ''
    });
    
    const navigate = useNavigate();

    useEffect(() => {
      if(!location.state){
        navigator.geolocation.getCurrentPosition(position => {
          setValues({...values, 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude});
        });
      }
    }, []);

    useEffect(() => {
        if (location.state) {
            console.log(location.state.kind)
            setKind(location.state.kind);
            setValues({
                ...values,
                chassisNumber: location.state.chassis_number,
                registrationNumber: location.state.registration_number,
                latitude: location.state.last_location.lat,
                longitude: location.state.last_location.lng,
                driven: location.state.miles_driven,
                kind: location.state.kind,
                inspection: location.state.last_inspection.substring(0,16),
            });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(location.state){
            try{
                const res = await VehicleService.updateVehicle(location.state.chassis_number,
                     values, kind);
                setLoading(false);
                navigate('/');
            }catch(err){
                setLoading(false);
                setErrorMessage(err.response.data);
            }
        }else{
            try{
                const res = await VehicleService.createVehicle(values, kind);
                setLoading(false);
                navigate('/');
                console.log(res.data);
            }catch(err){
                setLoading(false);  
                setErrorMessage(err.response.data)
            }
        }
    }

    const onChange = (e) => {
        setErrorMessage(null);
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleClick = () => {
        navigate('/');
    }

    return (
      <div className="mx-auto p-4 mt-2">
          <button 
              onClick={handleClick}
              className="bg-white btn ml-4 md:ml-0 md:float-right border-slate-300">Home
          </button>
        <div className="md:w-4/5 lg:w-3/5 xl:w-2/5 bg-white rounded-lg m-auto shadow-xl px-10 py-3">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
            Enter Vehicle Details
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="mt-4 text-center">
              <label className="block text-sm font-medium text-gray-600">Kind</label>
              <select
                className="mt-1 select select-bordered w-full max-w-xs"
                value={kind}
                onChange={(e) => setKind(e.target.value)}
              >
                <option />
                {KIND.map((kindItem) => (
                  <option key={kindItem}>{kindItem}</option>
                ))}
              </select>
            </div>
            
            {errorMessage && <div className="mt-4 text-red-700">{errorMessage} </div>}
            <div className="text-center mt-6">
              {!loading ? <button
                type="submit"
                className="bg-cyan-700 text-white py-2 px-6 rounded hover:bg-cyan-600"
              >
                Save
              </button> :
              <button
                type="submit"
                className="bg-cyan-700 text-white py-2 px-6 rounded hover:bg-cyan-600"
              >
                Loading...
              </button>}
            </div>
          </form>
        </div>
      </div>
    );
};

export default Vehicle;

