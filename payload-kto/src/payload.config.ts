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
import { Image } from './collections/Media';


const payload: PayloadConfig = {
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [
    
    Site,
    Page,
    
    ControllerFolder,
    Controller,
    
    DatasourceFolder,
    Banner,
    RichText,
    Cards,
    Card,
    
    Image,

    Users,
    Role,
  ],
}

export default buildConfig(payload);
