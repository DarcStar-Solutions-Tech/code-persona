import {NextRequest, NextResponse} from 'next/server'
import { prisma} from "@/lib/prisma";

export async  function GET(request: NextRequest) {
    const platforms = await prisma.languagePlatform.findMany({select:{id:true, name:true, logoURL:true, summary:true, websiteURL:true}});
    return NextResponse.json(platforms);
}


