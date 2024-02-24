import { Singleton } from "./singleton.ts";

export class ServiceRegistry extends Singleton {
  services!: Map<string, any>;

  protected constructor() {
    super();
    this.services = new Map<string, any>();
  }

  registerService<T>(key: string, service: T): void {
    this.services.set(key, service);
  }

  getService<T>(key: string): T {
    return this.services.get(key);
  }
}