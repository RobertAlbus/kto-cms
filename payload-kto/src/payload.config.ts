import { buildConfig, PayloadConfig } from 'payload/config';
import { Role } from './collections/Role';
import { Controller } from './collections/Controller';
import { Page } from './collections/Page';
import { RichText } from './collections/components/RichText';
import { Banner } from './collections/components/Banner';
import { Users } from './collections/User';
import { Site } from './collections/Site';
import { ControllerFolder, DatasourceFolder } from './collections/Folder';
import { Card, Cards } from './collections/components/Cards';


const payload: PayloadConfig = {
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [
    
    Site,
    DatasourceFolder,
    ControllerFolder,
    Controller,
    Page,

    Banner,
    RichText,
    Cards,
    Card,

    Users,
    Role,
  ],
}

export default buildConfig(payload);
