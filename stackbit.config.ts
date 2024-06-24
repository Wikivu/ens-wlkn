import { DatoCMSContentSource } from '@stackbit/cms-datocms';

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [
        new DatoCMSContentSource({
            apiToken: process.env.DATOCMS_API_TOKEN!,
            projectId: process.env.DATOCMS_PROJECT_ID!
        }),
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-datocms"
})