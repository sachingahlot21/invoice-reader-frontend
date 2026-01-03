"use client";

import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineStar } from "react-icons/ai";
import { GiTravelDress } from "react-icons/gi";

interface Member {
    id: string;
    name: string;
}

interface Expense {
    id: string;
    description: string;
    amount: number;
    paidBy: string;
    split: string[];
}

interface Group {
    id: string;
    name: string;
    type: "Trip" | "Home" | "Couple" | "Other";
    members: Member[];
    expenses: Expense[];
    createdAt: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    groups: Group[];
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [groups, setGroups] = useState<Group[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [newGroupType, setNewGroupType] = useState<Group["type"]>("Trip");
    const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);
    const [memberInput, setMemberInput] = useState("");


    const availableMembers: Member[] = [
        { id: "u1", name: "John Doe" },
        { id: "u2", name: "Jane Doe" },
        { id: "u3", name: "Alice" },
        { id: "u4", name: "Bob" },
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setGroups(parsedUser.groups || []);
        }
    }, []);

    const handleCreateGroup = () => {
        if (!newGroupName || selectedMembers.length === 0) return;

        const newGroup: Group = {
            id: "g_" + Date.now(),
            name: newGroupName,
            type: newGroupType,
            members: selectedMembers,
            expenses: [],
            createdAt: new Date().toISOString(),
        };

        const updatedGroups = [...groups, newGroup];
        setGroups(updatedGroups);

        if (user) {
            const updatedUser = { ...user, groups: updatedGroups };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }

        setNewGroupName("");
        setSelectedMembers([]);
        setNewGroupType("Trip");
        setModalOpen(false);
    };

    const groupTypeIcon = (type: Group["type"]) => {
        switch (type) {
            case "Trip": return <GiTravelDress className="inline mr-2" />;
            case "Home": return <AiOutlineHome className="inline mr-2" />;
            case "Couple": return <AiOutlineUsergroupAdd className="inline mr-2" />;
            case "Other": return <AiOutlineStar className="inline mr-2" />;
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Welcome, {user?.name}!
            </h1>

            <button
                onClick={() => setModalOpen(true)}
                className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Start a New Group
            </button>

            {groups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groups.map((group) => (
                        <div key={group.id} className="p-4 border rounded shadow">
                            <h2 className="text-xl font-semibold">
                                {groupTypeIcon(group.type)} {group.name}
                            </h2>
                            <p className="text-gray-600">Type: {group.type}</p>
                            <p className="text-gray-600">Members: {group.members.map(m => m.name).join(", ")}</p>
                            <p className="text-gray-500 text-sm">Created: {new Date(group.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No groups found. Create your first group!</p>
            )}

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow w-96">
                        <h2 className="text-2xl font-bold mb-4">Create New Group</h2>

                        <input
                            type="text"
                            placeholder="Group Name"
                            value={newGroupName}
                            onChange={(e) => setNewGroupName(e.target.value)}
                            className="w-full mb-3 p-2 border rounded"
                        />

                        <div className="mb-3">
                            <label className="font-semibold mb-1 block">Group Type:</label>
                            <select
                                value={newGroupType}
                                onChange={(e) => setNewGroupType(e.target.value as Group["type"])}
                                className="w-full p-2 border rounded"
                            >
                                <option value="Trip">Trip</option>
                                <option value="Home">Home</option>
                                <option value="Couple">Couple</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Members Section */}
                        <div className="mb-3">
                            <label className="font-semibold mb-1 block">Members:</label>

                            {/* Input to add a member */}
                            <div className="flex mb-2 space-x-2">
                                <input
                                    type="text"
                                    placeholder="Enter member name"
                                    value={memberInput}
                                    onChange={(e) => setMemberInput(e.target.value)}
                                    className="flex-1 p-2 border rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (memberInput.trim() === "") return;
                                        const newMember: Member = {
                                            id: "m_" + Date.now(),
                                            name: memberInput.trim(),
                                        };
                                        setSelectedMembers([...selectedMembers, newMember]);
                                        setMemberInput("");
                                    }}
                                    className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Add
                                </button>
                            </div>

                            {/* List of selected members */}
                            {selectedMembers.length > 0 && (
                                <ul className="list-disc pl-5">
                                    {selectedMembers.map((member) => (
                                        <li key={member.id} className="flex justify-between items-center">
                                            {member.name}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedMembers(selectedMembers.filter((m) => m.id !== member.id))
                                                }
                                                className="ml-2 text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 border rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateGroup}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Create Group
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
