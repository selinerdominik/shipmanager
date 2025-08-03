import {createShip, type ShipInput} from "../api.ts";
import {useContext, useState} from "react";
import {BasicAuthContext} from "../AuthProvider.tsx";

export default function ShipNewForm() {
    const authData = useContext(BasicAuthContext).user;
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