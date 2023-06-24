import { NextRequest, NextResponse } from "next/server";
import socials from "@/data/socials.json";

export async function GET(request: NextRequest) {
    let json_response = {
        status: 200,
        results: socials,
    };
    return NextResponse.json(json_response);
}
