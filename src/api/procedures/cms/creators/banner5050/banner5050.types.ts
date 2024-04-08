import type { Component } from "../component.types.ts";
import type { Button } from "@trpc-procedures/cms/types.ts";

export interface Banner5050 extends Component {
    buttons: [Button, Button]
}