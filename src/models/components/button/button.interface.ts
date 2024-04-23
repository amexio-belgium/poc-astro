import type { Component } from "../../abstract/component.interface.ts";
import type { ButtonMapping } from "./button.mapping.ts";

export interface Button extends ButtonMapping, Component {}