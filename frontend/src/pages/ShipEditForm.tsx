import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {updateShip, type ShipInput, getShipById} from "../api.ts";
import {useParams} from "react-router-dom";
import {BasicAuthContext} from "../AuthProvider.tsx";

export default function ShipEditForm() {
    const authData = useContext(BasicAuthContext).user;
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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}