import * as React from "react";
import {useEffect, useState} from "react";
import {updateShip, type ShipInput, getShipById} from "../util/api.ts";
import {useParams} from "react-router-dom";
import {useRequireAuth} from "../hooks/useRequireAuth.ts";

export default function ShipEditForm() {
    const authData = useRequireAuth();
    const { id } = useParams();
    const [formData, setFormData] = useState<ShipInput>(
        {
            name: "",
            description: "",
        }
    );

    useEffect(() => {
        if (!id) return;
        if (!authData) return;
        getShipById(parseInt(id), authData).then(res => {
            const { name, description } = res.data;
            setFormData({ name, description})
        }).catch(console.error);
    }, [id, authData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;
        if (!authData) return;
        updateShip(parseInt(id), formData, authData);
        return undefined;
    }

    return (
        <div>
            <h1>Edit Ship</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}