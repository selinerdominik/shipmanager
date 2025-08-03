import * as axios from "axios";

const api = axios.default.create({
    baseURL: "http://localhost:8080/api/"
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

export const getAllShips = () => api.get<ShipOutput[]>('/ships');
export const getShipById = (id: number) => api.get<ShipOutput>(`/ships/${id}`);
export const createShip = (payload: ShipInput) => api.post('/ships', payload);
export const updateShip = (id: number, payload: ShipInput) => api.put(`/ships/${id}`, payload);