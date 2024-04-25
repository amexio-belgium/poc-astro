import {ComponentFactory} from "../../abstract/component.factory.ts";
import type {Banner5050Mapping} from 'src/models/components/banner5050/banner5050.mapping.ts';
import type {Banner5050} from 'src/models/components/banner5050/banner5050.interface.ts';
import {Banner5050Model} from 'src/models/components/banner5050/banner5050.model.ts';

export class Banner5050Factory extends ComponentFactory {
    public createComponent(mapping: Banner5050Mapping): Banner5050 {
        return new Banner5050Model(mapping);
    }
}