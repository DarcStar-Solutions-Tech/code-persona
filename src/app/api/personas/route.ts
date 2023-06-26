import {NextRequest, NextResponse} from 'next/server'
import { prismaClient} from "@/lib/prisma";

export async  function GET(request: NextRequest) {
    const personas = await prismaClient.persona.findMany({select:{id:true, name:true, imageURL:true, summary:true, slug:true}});
    return NextResponse.json(personas);
}


