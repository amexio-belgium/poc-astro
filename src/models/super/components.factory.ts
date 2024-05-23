import {BannerVideoFactory} from "../components/bannerVideo/bannerVideo.factory.ts";
import type {ComponentFactory} from "../abstract/component.factory.ts";
import {ComponentsList} from "./components.type.ts";
import {Banner5050Factory} from "../components/banner5050/banner5050.factory.ts";

export class ComponentsFactoryCreator {
    createFactory (factoryName: ComponentsList): ComponentFactory | undefined {
        switch (factoryName) {
            // would it be possible to apply dynamic imports over here?
            // or is it better to make this tree-shakable?
            case ComponentsList.Banner5050:
                return new Banner5050Factory();
            case ComponentsList.BannerVideo:
                return new BannerVideoFactory();
        }
    }
}