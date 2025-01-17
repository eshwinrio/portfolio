import React, { FC } from "react";


export interface JsonLdInjectorProps {
    readonly context?: string;
    readonly type?: string;
    readonly url?: string;
    readonly logo?: string;
    readonly sameAs?: string[];
}

// TODO: Migrate hardcoded values to env values
const JsonLdInjector: FC<JsonLdInjectorProps> = ({
    context = "https://schema.org",
    type = "Person",
    url = "https://eshwinrio.vercel.app",
    logo = "https://eshwinrio.vercel.app/raiden-chibi.png",
    sameAs = [
        "https://www.linkedin.com/in/eshwinrio/",
        "https://github.com/eshwinrio/",
    ]
}) => {
    const schemaData = {
        "@context": context,
        "@type": type,
        url, logo, sameAs
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default JsonLdInjector;
