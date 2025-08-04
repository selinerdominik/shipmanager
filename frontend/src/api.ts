import * as axios from "axios";

const api = axios.default.create({
    baseURL: "http://localhost:8080/api/",
    withCredentials: true

});

export type ShipInput = {
    name: string;
    description: string;
};

export type ShipOutput = {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}

export type ShipListOutput = {
    ships: ShipOutput[];
    totalPages: number;
}

export const getAllShips = (authData: string, page: number, size: number) => api.get<ShipListOutput>('/ships?page=' + page + '&size=' + size, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const getShipById = (id: number, authData: string) => api.get<ShipOutput>(`/ships/${id}`, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const createShip = (payload: ShipInput, authData: string) => api.post('/ships', payload, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const updateShip = (id: number, payload: ShipInput, authData: string) => api.put(`/ships/${id}`, payload, {
    headers: { 'Authorization': 'Basic ' + authData }
});
// TODO: Delete Ship call
// TODO: Login API call