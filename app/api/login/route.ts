import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { email, password } = await req.json();

    // Fixed sample credentials
    const SAMPLE_USER = {
        email: "user@asda.com",
        password: "password123",
        name: "Sachin",
        id: "u12345",
    };

    // Check credentials
    if (email === SAMPLE_USER.email && password === SAMPLE_USER.password) {
        // Sample groups (can be empty or have mock groups)
        const groups = [
            {
                id: "g1",
                name: "Family",
                members: [
                    { id: "u1", name: "John Doe" },
                    { id: "u2", name: "Jane Doe" },
                    { id: "u3", name: "Junior Doe" },
                ],
                expenses: [
                    // sample structure for future
                    // { id: "e1", description: "Groceries", amount: 50, paidBy: "u1", split: ["u1","u2","u3"] }
                ],
                createdAt: "2025-12-28T10:00:00Z",
            },
            {
                id: "g2",
                name: "Friends",
                members: [
                    { id: "u4", name: "Alice" },
                    { id: "u5", name: "Bob" },
                ],
                expenses: [],
                createdAt: "2025-12-20T15:30:00Z",
            },
            {
                id: "g3",
                name: "Work Buddies",
                members: [
                    { id: "u6", name: "Charlie" },
                    { id: "u7", name: "David" },
                    { id: "u8", name: "Eve" },
                    { id: "u9", name: "Frank" },
                ],
                expenses: [],
                createdAt: "2025-12-25T12:00:00Z",
            },
        ];

        return NextResponse.json({
            message: "Login successful",
            user: {
                id: SAMPLE_USER.id,
                name: SAMPLE_USER.name,
                email: SAMPLE_USER.email,
                groups,
            },
        });
    } else {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
};
