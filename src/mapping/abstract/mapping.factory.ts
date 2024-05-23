import type {Mapping} from "../../models/abstract/component.mapping.ts";

export abstract class MappingFactory {
    public abstract createMapping(component: any): Mapping;
}

export abstract class SuperMappingFactory {
    public abstract createFactory (factoryName: string): MappingFactory | undefined;
}