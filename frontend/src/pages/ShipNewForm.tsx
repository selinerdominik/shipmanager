import {createShip, type ShipInput} from "../api.ts";
import {useState} from "react";

export default function ShipNewForm() {
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
            await createShip(formData);
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