import { NextResponse } from "next/server";
import services from "@/data/services.json";
import areasOfWork from "@/data/areasOfWork.json";
import recentWorks from "@/data/recentWorks.json";
import socials from "@/data/socials.json";

export async function GET() {
    let json_response = {
        status: 200,
        results: { services, areasOfWork, recentWorks, socials },
    };
    return NextResponse.json(json_response);
}
