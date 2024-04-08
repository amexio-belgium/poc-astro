import type { ComponentInterface } from "../structure/component.interface.ts";

export abstract class ComponentFactory {
    public abstract createComponent(): ComponentInterface;
}