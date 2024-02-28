/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type {
  ButtonListResponse,
  ButtonRequest,
  ButtonResponse,
  GetButtonsParams
} from './generated.schemas'
import { strapiInstance } from '../../api/orval/strapi-instance';
import type { BodyType } from '../../api/orval/strapi-instance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  export const getButtons = (
    params?: GetButtonsParams,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<ButtonListResponse>(
      {url: `/buttons`, method: 'GET',
        params
    },
      options);
    }
  export const postButtons = (
    buttonRequest: BodyType<ButtonRequest>,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<ButtonResponse>(
      {url: `/buttons`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: buttonRequest
    },
      options);
    }
  export const getButtonsId = (
    id: number,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<ButtonResponse>(
      {url: `/buttons/${id}`, method: 'GET'
    },
      options);
    }
  export const putButtonsId = (
    id: number,
    buttonRequest: BodyType<ButtonRequest>,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<ButtonResponse>(
      {url: `/buttons/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: buttonRequest
    },
      options);
    }
  export const deleteButtonsId = (
    id: number,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<number>(
      {url: `/buttons/${id}`, method: 'DELETE'
    },
      options);
    }
  export type GetButtonsResult = NonNullable<Awaited<ReturnType<typeof getButtons>>>
export type PostButtonsResult = NonNullable<Awaited<ReturnType<typeof postButtons>>>
export type GetButtonsIdResult = NonNullable<Awaited<ReturnType<typeof getButtonsId>>>
export type PutButtonsIdResult = NonNullable<Awaited<ReturnType<typeof putButtonsId>>>
export type DeleteButtonsIdResult = NonNullable<Awaited<ReturnType<typeof deleteButtonsId>>>