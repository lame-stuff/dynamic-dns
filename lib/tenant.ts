import { DAO, record } from './DAO';
import configService from './configService';

interface Tenant extends record {
  domain: string;
}

export default class TenantDAO extends DAO<Tenant> {
  add = async () => {
    const id = this.generateId();
    const domain = this.generateDomain(id);
    
    // TODO: Add DB Logic

    return {
      id,
      domain,
    };
  };

  get = async (id: string): Promise<Tenant> => {
    return { domain: 'xxx', id}
  }

  getAll = async(): Promise<Tenant[]> => {
      throw new Error('getAll on this resource is not supported')
  }

  delete = async(id: string): Promise<boolean> => {
    throw new Error('Deletion on this resource is not supported')
  }

  private generateDomain(id: string) {
    return `${id}.${configService.getConfig<String>('BASE_DOMAIN')}`;
  }
}
