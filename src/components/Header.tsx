import '../css/Header.css'

interface HeaderProps {
    data: string;
}

export const Header = ({ data }: HeaderProps) => {
    return (
        <>
           
             <h1>{data}</h1>
        </>
    );
};