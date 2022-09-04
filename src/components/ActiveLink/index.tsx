import { ReactElement, cloneElement } from 'react';
import { useRouter } from '../../../node_modules/next/router';
import Link, { LinkProps } from "../../../node_modules/next/link";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps){
    const { asPath } = useRouter();

    const className = asPath === rest.href ? activeClassName : '';

   
    return(
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}