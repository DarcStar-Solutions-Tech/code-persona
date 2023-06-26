import {PrismaClient} from '@prisma/client';

import 'dotenv/config';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_ORG = process.env.OPENAI_API_ORG;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';

const prisma = new PrismaClient();

async function main() {
    const OpenAI = await prisma.languagePlatform.upsert({
        where: {name: 'OpenAI'},
        update: {},
        create: {
            name: 'OpenAI',
            slug: 'openai',
            baseURL: `${OPENAI_BASE_URL}`,
            summary: 'OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc',
            description: 'OpenAI is an artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. The company, considered a competitor to DeepMind, conducts research in the field of artificial intelligence (AI) with the stated aim to promote and develop friendly AI in such a way as to benefit humanity as a whole.',
            logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/OpenAI_Logo_with_text.svg/1200px-OpenAI_Logo_with_text.svg.png',
            websiteURL: 'https://openai.com/',
            organizationID: `${OPENAI_API_ORG}`,
            apiKey: `${OPENAI_API_KEY}`,
            models:
                [
                    "gpt-4",
                    "gpt-4-32k",
                    "gpt-3.5-turbo",
                    "gpt-3.5-turbo-16k",
                    "text-davinci-003",
                    "text-davinci-002",
                    "text-curie-001",
                    "text-babbage-001",
                    "davinci",
                ]
        }
    });
    console.log(OpenAI);
}

main()
    .then(async () => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });