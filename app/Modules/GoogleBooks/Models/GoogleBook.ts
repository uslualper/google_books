export default class GoogleBook {
    constructor(
        public kind: string,
        public id: string,
        public etag: string,
        public selfLink: string[],
        public volumeInfo: {
            title: string,
            subtitle: string,
            authors: string[],
            publisher: string,
            publishedDate: string,
            description: string,
            industryIdentifiers: {
                type: string,
                identifier: string
            }[],
            readingModes: {
                text: boolean,
                image: boolean
            },
            pageCount: number,
            printType: string,
            categories: string[],
            maturityRating: string,
            allowAnonLogging: boolean,
            contentVersion: string,
            panelizationSummary: {
                containsEpubBubbles: boolean,
                containsImageBubbles: boolean
            }
            imageLinks: {
                smallThumbnail: string,
                thumbnail: string
            },
            language: string,
            previewLink: string,
            infoLink: string,
            canonicalVolumeLink: string
        },
        public saleInfo: {
            country: string,
            saleability: string,
            isEbook: boolean,
        },
        public accessInfo: {
            country: string,
            viewability: string,
            embeddable: boolean,
            publicDomain: boolean,
            textToSpeechPermission: string,
            epub: {
                isAvailable: boolean,
            },
            pdf: {
                isAvailable: boolean,
            },
            webReaderLink: string,
            accessViewStatus: string,
            quoteSharingAllowed: boolean
        },
        public searchInfo: {
            textSnippet: string
        },
    ) {}
}