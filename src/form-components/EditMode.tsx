import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label>
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={isEditMode}
                        onChange={(e) => {
                            setIsEditMode(e.target.checked);
                        }}
                    />
                </label>
            </div>
            {isEditMode ?
                <div>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) => {
                                    setIsStudent(e.target.checked);
                                }}
                            />
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
