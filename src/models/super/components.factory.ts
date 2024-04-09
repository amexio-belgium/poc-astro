import {BannerVideoFactory} from "../components/bannerVideo/bannerVideo.factory.ts";
import type {ComponentFactory} from "../abstract/component.factory.ts";
import {ComponentsList} from "./components.type.ts";

export class ComponentsFactoryCreator {
    createFactory (factoryName: ComponentsList): ComponentFactory | undefined {
        switch (factoryName) {
            case ComponentsList.BannerVideo:
                return new BannerVideoFactory();
        }
    }
}