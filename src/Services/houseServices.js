import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const houseService = {
    async getHouses() {
        let response = await apiClient.get("/houses");
        let allHouses = response.data;
        return allHouses;
    },
    async getHouse(id) {
        let response = await apiClient.get("/houses/" + id);
        let house = response.data;
        return house;
    },
    async submitHouse(newHouse){
        await apiClient.post("/houses", newHouse)
    },
    async deleteHouse(id){
        await apiClient.delete("/houses/" + id)
    },
    async updateHouse(id, updatedHouse){
        await apiClient.patch("/houses/" + id, updatedHouse)
    }
}

export default houseService