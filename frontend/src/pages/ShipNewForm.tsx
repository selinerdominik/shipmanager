import {createShip, type ShipInput} from "../api.ts";
import {useState} from "react";
import * as React from "react";
import {useRequireAuth} from "../hooks/useRequireAuth.ts";

export default function ShipNewForm() {
    const authData = useRequireAuth();
    const [formData, setFormData] = useState<ShipInput>({
        name: "",
        description: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!authData) return;
            await createShip(formData, authData);
        } catch (e) {
            console.error(e);
        }

        return undefined;
    }

    return (
        <div>
            <h1>Create Ship</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
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