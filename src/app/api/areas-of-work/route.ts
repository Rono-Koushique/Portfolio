import { NextRequest, NextResponse } from "next/server";
import areaOfWork from "@/data/areasOfWork.json";

export async function GET(request: NextRequest) {
    let json_response = {
        status: 200,
        results: areaOfWork,
    };
    return NextResponse.json(json_response);
}
