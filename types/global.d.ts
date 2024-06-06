import "chakra-paginator";

declare global {
    namespace ChakraPaginator {
        interface PaginatorProps {
            children?: React.ReactNode;
        }
    }
}

export type CustomAppPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
> & {
    hasHiddenFooter?: boolean;
};
