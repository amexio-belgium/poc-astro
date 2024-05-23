import type { Component } from "./component.interface.ts";
import type { Mapping } from "./component.mapping.ts";

export abstract class ComponentFactory {
    public abstract createComponent(mapping: Mapping): Component;
}