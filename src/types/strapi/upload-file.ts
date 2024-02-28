/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type {
  PostUploadBody,
  PostUploadididBody,
  PostUploadididParams,
  UploadFile
} from './generated.schemas'
import { strapiInstance } from '../../api/orval/strapi-instance';
import type { BodyType } from '../../api/orval/strapi-instance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  /**
 * Upload files
 */
export const postUpload = (
    postUploadBody: BodyType<PostUploadBody>,
 options?: SecondParameter<typeof strapiInstance>,) => {const formData = new FormData();
if(postUploadBody.path !== undefined) {
 formData.append('path', postUploadBody.path)
 }
if(postUploadBody.refId !== undefined) {
 formData.append('refId', postUploadBody.refId)
 }
if(postUploadBody.ref !== undefined) {
 formData.append('ref', postUploadBody.ref)
 }
if(postUploadBody.field !== undefined) {
 formData.append('field', postUploadBody.field)
 }
postUploadBody.files.forEach(value => formData.append('files', value));

      return strapiInstance<UploadFile[]>(
      {url: `/upload`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData
    },
      options);
    }
  /**
 * Upload file information
 */
export const postUploadidid = (
    id: string,
    postUploadididBody: BodyType<PostUploadididBody>,
    params: PostUploadididParams,
 options?: SecondParameter<typeof strapiInstance>,) => {const formData = new FormData();
if(postUploadididBody.fileInfo !== undefined) {
 formData.append('fileInfo', JSON.stringify(postUploadididBody.fileInfo));
 }
if(postUploadididBody.files !== undefined) {
 formData.append('files', postUploadididBody.files)
 }

      return strapiInstance<UploadFile[]>(
      {url: `/upload?id=${id}`, method: 'POST',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData,
        params
    },
      options);
    }
  export const getUploadFiles = (
    
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<UploadFile[]>(
      {url: `/upload/files`, method: 'GET'
    },
      options);
    }
  export const getUploadFilesId = (
    id: string,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<UploadFile>(
      {url: `/upload/files/${id}`, method: 'GET'
    },
      options);
    }
  export const deleteUploadFilesId = (
    id: string,
 options?: SecondParameter<typeof strapiInstance>,) => {
      return strapiInstance<UploadFile>(
      {url: `/upload/files/${id}`, method: 'DELETE'
    },
      options);
    }
  export type PostUploadResult = NonNullable<Awaited<ReturnType<typeof postUpload>>>
export type PostUploadididResult = NonNullable<Awaited<ReturnType<typeof postUploadidid>>>
export type GetUploadFilesResult = NonNullable<Awaited<ReturnType<typeof getUploadFiles>>>
export type GetUploadFilesIdResult = NonNullable<Awaited<ReturnType<typeof getUploadFilesId>>>
export type DeleteUploadFilesIdResult = NonNullable<Awaited<ReturnType<typeof deleteUploadFilesId>>>