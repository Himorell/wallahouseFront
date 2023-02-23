import houseService from "../Services/houseServices";

const houseHandler = {
    addHouse(newHouse){
        
        if (!newHouse) {
            return;
        }

        let house = {
            "title": newHouse.title,
            "price": newHouse.price,
            "img": newHouse.img,
            "category": newHouse.category,
            "bedrooms": newHouse.bedrooms,
            "bathrooms": newHouse.bathrooms,
            "persons": newHouse.persons,
            "description": newHouse.description,
            "city": newHouse.city,
            "province": newHouse.province,
            "exchange": newHouse.exchange,
            "animals": newHouse.animals,
            "pool": newHouse.pool,
            "id": ""

        }
        houseService.submitHouse(house);
        return house;
    },
    loadHouses(){
        return houseService.getHouses();
    },
    loadHouse(id) {
        return houseService.getHouse(id);
    },
    deleteHouse(id){
        return houseService.deleteHouse(id);
    },
    updateHouse(newHouse){
        if (!newHouse) {
            return;
        }

        let newHouseModel = {
            "title": newHouse.title,
            "price": newHouse.price,
            "img": newHouse.img,
            "category": newHouse.category,
            "bedrooms": newHouse.bedrooms,
            "bathrooms": newHouse.bathrooms,
            "persons": newHouse.persons,
            "description": newHouse.description,
            "city": newHouse.city,
            "province": newHouse.province,
            "exchange": newHouse.exchange,
            "animals": newHouse.animals,
            "pool": newHouse.pool,
            "id": newHouse.id,
        }

        let id = newHouseModel.id;

        return houseService.updateHouse(id, newHouseModel);
    }
}

export default houseHandler

