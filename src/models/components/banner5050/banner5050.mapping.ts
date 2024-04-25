import type {Mapping} from "../../abstract/component.mapping.ts";
import type {Button} from 'src/models/components/button/button.interface.ts';


export interface Banner5050Mapping extends Mapping {
    buttons: [Button, Button],
}