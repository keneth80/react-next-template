import {ReactNode} from 'react';

export default function Layout(props: {children: ReactNode; analytics: ReactNode; team: ReactNode}) {
    return (
        <>
            {props.children}
            {props.team}
            {props.analytics}
        </>
    );
}
