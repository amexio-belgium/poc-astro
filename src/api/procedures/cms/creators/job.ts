import {Components, type JobType} from '@trpc-procedures/cms/types.ts';

export function createJob(){
    return {componentName: Components.Job} as JobType;
}