import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditName() {
        setIsEditing((editing) => !editing);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{name}</span>
                ) : (
                    isEditing && <input type="text" required value={name} />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    );
}
