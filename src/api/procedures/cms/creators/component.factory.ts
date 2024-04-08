import type { Component } from "./component.types.ts";

export abstract class ComponentFactory {
    public abstract createComponent(): Component;
}