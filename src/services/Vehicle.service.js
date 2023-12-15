import ApiClient from "./Api";

class VehicleService {
    async getVehicleById(id){
        return await ApiClient.get(`/vehicle/${id}`);
    }

    async getVehicles(id){
        return await ApiClient.get(`/vehicle`);
    }

    async createVehicle(vehicle, kind) {
        return await ApiClient.post('/vehicle', {
            chassis_number: vehicle.chassisNumber,
            registration_number: vehicle.registrationNumber,
            kind: vehicle.kind,
            last_location: {
                lat: vehicle.latitude,
                lng: vehicle.longitude
            },
            kind,
            miles_driven: vehicle.driven,
            last_inspection: vehicle.inspection
        });
    }

    async updateVehicle(id, vehicle, kind){
        return await ApiClient.put(`/vehicle/${id}`, {
            chassis_number: vehicle.chassisNumber,
            registration_number: vehicle.registrationNumber,
            kind: vehicle.kind,
            last_location: {
                lat: vehicle.latitude,
                lng: vehicle.longitude
            },
            kind,
            miles_driven: vehicle.driven,
            last_inspection: vehicle.inspection
        });
    }

    async deleteVehicle(id){
        return await ApiClient.delete(`/vehicle/${id}`);
    }
}

export default new VehicleService();