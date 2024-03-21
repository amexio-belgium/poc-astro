import {useEffect, useState} from "react";
import {
    type BuilderContent,
    Content,
    fetchOneEntry,
    isPreviewing,
    type RegisteredComponent
} from '@builder.io/sdk-react';
import {fullWidthBannerBuilderProps} from '../../components/react/FullWidthBanner';

interface pageProps {
    builderModel: string,
    apiKey: string,
    slug: string
}

export function Page({builderModel, apiKey, slug}: pageProps){

    const [content, setContent] = useState<BuilderContent|null>();
    const customComponents: RegisteredComponent[] = [
        fullWidthBannerBuilderProps
    ]
    useEffect(() => {
        fetchOneEntry({
            model: builderModel,
            apiKey: apiKey,
            userAttributes: {
                urlPath: `/${slug}`
            },
            staleCacheSeconds: 3,
            cacheSeconds: 3,
        }).then((content) => {
            setContent(content);
        });
    }, []);
    
    const shouldRenderBuilderContent = content || isPreviewing();
    
    return shouldRenderBuilderContent ?
        (<Content customComponents={customComponents} content={content} model={builderModel} apiKey={apiKey}></Content>) 
        :
        (<div>Content Not Found</div>)
}
