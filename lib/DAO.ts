import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { crudMethod, record } from './types';

export abstract class DAO<T extends record> {
  protected add(input?: Partial<T>): Promise<T> {
    throw Error('Add is not supported on this resource');
  }
  protected list(): Promise<T[]> {
    throw Error('List is not supported on this resource');
  }
  protected get(id: string): Promise<T> {
    throw Error('Get is not supported on this resource');
  }

  protected update(input: Partial<T>): Promise<T> {
    throw Error('Update is not supported on this resource');
  }

  protected delete(id: string): Promise<boolean> {
    throw Error('Delete is not supported on this resource');
  }

  protected generateId(): string {
    return uuidv4();
  }

  public createResource() {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      const data: Partial<T> = req.body;
      try {
        res.send(this.add(data));
      } catch (e) {
        res.status(400).send(e);
      }
    };
  }
}
