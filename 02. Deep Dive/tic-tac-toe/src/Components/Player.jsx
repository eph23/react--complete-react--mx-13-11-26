import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditName() {
        setIsEditing(true);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{name}</span>
                ) : (
                    isEditing && <input type="text" />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    );
}
