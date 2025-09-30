import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isEditMode}
                    onChange={(e) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
                <label className="form-check-label">
                    Edit Mode
                </label>
            </div>
            {isEditMode ?
                <div>
                    <div className="mb-3">
                        <label className="form-label">
                            Name:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                        <label className="form-check-label">
                            Student
                        </label>
                    </div>
                </div>
            :   <div>
                    {userName} is {isStudent ? "" : "not "}a student
                </div>
            }
        </div>
    );
}
