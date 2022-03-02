import { ReactElement } from 'react';

interface IProps {
    children: ReactElement,
}

const LayoutPublic = ({ children }: IProps) => {
    return (
        <>{ children }</>
    )
};

export default LayoutPublic;
