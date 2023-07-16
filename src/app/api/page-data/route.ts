import { NextResponse } from "next/server";
import recentWorks from "@/data/recentWorks.json";
import socials from "@/data/socials.json";
import skills from "@/data/skills.json";

export async function GET() {
    let json_response = {
        status: 200,
        results: { skills, recentWorks, socials },
    };
    return NextResponse.json(json_response);
}
