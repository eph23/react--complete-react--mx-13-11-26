import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditName() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                ) : (
                    isEditing && (
                        <input
                            type="text"
                            required
                            value={playerName}
                            onChange={handleChange}
                        />
                    )
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    );
}
