import * as axios from "axios";

const api = axios.default.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true

});

export type LoginRequest = {
    username: string;
    password: string;
}

export type LoginResponse = {
    status: string;
}

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

export const getAllShips = (authData: string, page: number, size: number) => api.get<ShipListOutput>('api/ships?page=' + page + '&size=' + size, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const getShipById = (id: number, authData: string) => api.get<ShipOutput>(`api/ships/${id}`, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const createShip = (payload: ShipInput, authData: string) => api.post('api/ships', payload, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const updateShip = (id: number, payload: ShipInput, authData: string) => api.put(`api/ships/${id}`, payload, {
    headers: { 'Authorization': 'Basic ' + authData }
});
export const deleteShip = (id: number, authData: string) => api.delete(`api/ships/${id}`, {
    headers: {'Authorization': 'Basic ' + authData}
});

export const authenticate = (payload: LoginRequest) => api.post<LoginResponse>('/auth', payload);

