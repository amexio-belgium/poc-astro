import {ComponentsList} from "../../super/components.type.ts";
import type {Button} from 'src/models/components/button/button.interface.ts';
import type {Banner5050Mapping} from 'src/models/components/banner5050/banner5050.mapping.ts';
import type {Banner5050} from 'src/models/components/banner5050/banner5050.interface.ts';

export class Banner5050Model implements Banner5050 {
    componentName = ComponentsList.Banner5050;
    buttons: [Button, Button];

    // now a url can be provided, should it be possible (for other source maybe) to also provide just the id,
    // then generate the url from the id? (use constructor overloading?)
    // if it is possible to upload from multiple sources, the source type should be defined also, when provided an id only,
    // otherwise this might be derived from the url also and made sure to transform to an embed type of url
    constructor (banner5050: Banner5050Mapping) {
        this.buttons = banner5050.buttons;
    }
    
}