import {NextRequest, NextResponse} from 'next/server'
import { prismaClient} from "@/lib/prisma";

export async  function GET(request: NextRequest) {
    const platforms = await prismaClient.languagePlatform.findMany({select:{id:true, name:true, logoURL:true, summary:true, slug:true, websiteURL:true}});
    return NextResponse.json(platforms);
}


