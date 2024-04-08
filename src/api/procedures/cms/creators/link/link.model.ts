import { ComponentFactory } from "../component.factory.ts";
import type { Link } from "./link.types.ts";
export class LinkModel extends ComponentFactory {
    createComponent() { return { url: 'test', content: 'text' } }
}