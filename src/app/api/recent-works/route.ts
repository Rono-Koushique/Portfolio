import { NextRequest, NextResponse } from "next/server";
import recentWorks from "@/data/recentWorks.json";

export async function GET(request: NextRequest) {
    let json_response = {
        status: 200,
        results: recentWorks,
    };
    return NextResponse.json(json_response);
}