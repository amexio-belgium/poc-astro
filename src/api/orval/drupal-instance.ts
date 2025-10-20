import Axios, {type AxiosError, type AxiosRequestConfig} from 'axios';

export const DRUPAL_AXIOS_INSTANCE = Axios.create({ baseURL: `${import.meta.env.DRUPAL_URL}/jsonapi` }); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const drupalInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = DRUPAL_AXIOS_INSTANCE({
        ...config,
        ...options,
        cancelToken: source.token,
    }).then(({ data }) => data);

    // @ts-expect-error .cancel doesn't exist on promise because typing is not the best for Orval
    promise.cancel = () => {
        source.cancel('Query was cancelled');
    };

    console.log('hello')
    return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
