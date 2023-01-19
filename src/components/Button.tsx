import React from "react"

type ButtonProps = {
    text: string|React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    disabled?:boolean;
    onClick ?: (e:React.MouseEvent<HTMLButtonElement>)=>void,
}
export const ButtonHTML = ({text,type, onClick, disabled}:ButtonProps) => {
    return (
    <button type={type} disabled={disabled} className="w-full md:w-fit bg-renthighlight 
    hover:bg-rentcyan hover:text-rentprincipal  disabled:bg-gray-400
    text-rentwhite 
    text-sm xl:text-lg font-semibold 
    rounded-lg uppercase 
    px-4 py-3 " 
    onClick={onClick}
    >{text}</button>)
}
type ButtonDossierProps = {
    text:string;
}
export const ButtonDossier = ({text}:ButtonDossierProps) => {

    return <button className="flex items-center justify-between 
                w-72 lg:w-80 xl:w-96 h-14 px-2 
                hover:bg-rentcyan bg-rentgray 
                text-rentprincipal font-normal rounded-lg text-center rentshadow">
            
            <div className="w-5/6 flex items-center justify-center">
                <span className="text-sm md:text-lg lg:text-lg xl:text-xl whitespace-nowrap">{text}</span> 
            </div>
            <div
                className="w-12 h-14 flex items-center justify-center border-l-2 border-rentprincipal/10 text-center font-semibold ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={14} fill="#13497B"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </div>

    </button>
}