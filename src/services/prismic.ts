import Prismic from '../../node_modules/@prismicio/client';

export function getPrismicClient(req?: unknown){
    const prismic = Prismic.client('https://blog-portf.prismic.io/api/v2',{
        req,
    })

    return prismic;
}