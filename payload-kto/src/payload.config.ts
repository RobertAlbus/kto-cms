import { buildConfig, PayloadConfig } from 'payload/config';
import Role from './collections/Role';
// import Examples from './collections/Examples';
import Users from './collections/Users';


const payload: PayloadConfig = {
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [
    Users,
    Role
    // Add Collections here
    // Examples,
  ],
}
export default buildConfig(payload);
