import { NextRequest, NextResponse } from "next/server";
import services from "@/data/services.json";

export async function GET(request: NextRequest) {
    let json_response = {
        status: 200,
        results: services,
    };
    return NextResponse.json(json_response);
}
