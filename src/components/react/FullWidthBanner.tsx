
import React from 'react';

interface fullWidthBannerProps {
    title: string,
    description: string,
    buttonLink: string,
    buttonText: string,
    image: string
}

export const fullWidthBannerBuilderProps =         {
    component: FullWidthBanner,
    name: 'Full Width Banner',
    inputs: [
        {
            name: 'image',
            type: 'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            required: true,
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'buttonLink',
            type: 'string'
        },
        {
            name: 'buttonText',
            type: 'string'
        },
        {
            name: 'alignment',
            type: 'string',
            enum: ['left', 'center', 'right'],
            required: true,
            defaultValue: 'left'
        }
    ],
}
export function FullWidthBanner({title, description, buttonLink, buttonText, image}: fullWidthBannerProps){
    console.log(image);
    return (
        <article 
            style={{
                backgroundSize: 'cover', 
                backgroundPosition: 'center center', 
                backgroundRepeat: 'no-repeat', 
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
            }} 
            className="px-5 py-16">
            <h1 className="max-w-[50%]">{title}</h1>
            {description && description !== '' &&
                <div className="content--paragraph-buttonbanner-description">
                    <p>Een kijkje op een rioolwaterzuiveringsinstallatie, een werf en op onze Campus Aquafin</p>
                </div>
            }
            <button 
                className="py-3.5 px-4 bg-aq-primary rounded-md text-white text-base mt-3"
                onClick={event =>  window.location.href=buttonLink}>
                {buttonText}
            </button>
        </article>
    )
}