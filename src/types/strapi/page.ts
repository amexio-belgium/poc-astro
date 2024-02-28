/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type {
  GetPagesParams,
  PageListResponse,
  PageLocalizationRequest,
  PageLocalizationResponse,
  PageRequest,
  PageResponse
} from './generated.schemas'
import { strapiInstance } from '../../api/orval/strapi-instance';
import type { BodyType } from '../../api/orval/strapi-instance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  export const getPages = (
    params?: GetPagesParams,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<PageListResponse>(
      {url: `/pages`, method: 'GET',
        params
    },
      options);
    }
  export const postPages = (
    pageRequest: BodyType<PageRequest>,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<PageResponse>(
      {url: `/pages`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pageRequest
    },
      options);
    }
  export const getPagesId = (
    id: number,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<PageResponse>(
      {url: `/pages/${id}`, method: 'GET'
    },
      options);
    }
  export const putPagesId = (
    id: number,
    pageRequest: BodyType<PageRequest>,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<PageResponse>(
      {url: `/pages/${id}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: pageRequest
    },
      options);
    }
  export const deletePagesId = (
    id: number,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<number>(
      {url: `/pages/${id}`, method: 'DELETE'
    },
      options);
    }
  export const postPagesIdLocalizations = (
    id: number,
    pageLocalizationRequest: BodyType<PageLocalizationRequest>,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<PageLocalizationResponse>(
      {url: `/pages/${id}/localizations`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: pageLocalizationRequest
    },
      options);
    }
  export type GetPagesResult = NonNullable<Awaited<ReturnType<typeof getPages>>>
export type PostPagesResult = NonNullable<Awaited<ReturnType<typeof postPages>>>
export type GetPagesIdResult = NonNullable<Awaited<ReturnType<typeof getPagesId>>>
export type PutPagesIdResult = NonNullable<Awaited<ReturnType<typeof putPagesId>>>
export type DeletePagesIdResult = NonNullable<Awaited<ReturnType<typeof deletePagesId>>>
export type PostPagesIdLocalizationsResult = NonNullable<Awaited<ReturnType<typeof postPagesIdLocalizations>>>