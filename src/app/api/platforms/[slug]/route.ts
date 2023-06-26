import {NextRequest, NextResponse} from 'next/server'
import { prismaClient } from "@/lib/prisma";

export async  function GET(request: NextRequest, {params}: {params: {slug: string}}) {
    const platform = await prismaClient.languagePlatform.findUnique({where: {slug: params.slug}});
    return NextResponse.json(platform);
}
