export abstract class ComponentTypeFactory {
    public abstract createComponent(component: any): ComponentType;
}


export interface ComponentType {
    type: string
}