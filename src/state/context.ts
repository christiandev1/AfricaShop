import React, { useContext } from "react";
// import { FOLDER, FolderInfo } from "../@interfaces/Folder";
// import { LandlordForm } from "../@interfaces/formulaire";
// import { Building } from "../@interfaces/immeuble";
// import { TLocation } from "../@interfaces/logement";
// import { Mandatary } from "../@interfaces/mandatary";
// import { TonUpdateState } from "../@interfaces/onUpdate";
// import { FileResponse } from "../@interfaces/request";
// import { TOASTPR } from "../@interfaces/toast";
// import { VisitorInfo } from "../@interfaces/vistor";
import { TglobalState } from "../contextProvider/AppGlobalStateProvider";


export type AppStateContextProps ={
    globalState : TglobalState
    // toastPr: {
    //     type:number;
    //     open: boolean;
    //     message:string
    // }
    // onUpdateState ?: TonUpdateState
    // verifyVisitor : (formulaireState:VisitorInfo) => {};
    // saveBailleurInfo: (bailleurInfo: FolderInfo)=>void;
    // saveListeDesBailleurs: (listOfLandlords: LandlordForm[])=>void;
    // addRepresentative: (representative:Mandatary)=>void;
     saveImmeubleInfo: (building:{})=>void;
    // saveLogementInfo: (location:TLocation, postIt:boolean)=>void;
    // saveSignedFile: (formData: FormData)=>void;
    // saveFile: (formData:FormData)=>void;
    // closeErrorToast: ()=>void;
    // preventUser: () => void;
    // addToast: (toast:TOASTPR) => void;
    // updateOldFolder : ()=> void;
    // sendFiles : ()=>FileResponse;
    // addLogin : (payload: any)=>void;
    // deleteFolder:(payload:FOLDER)=>void;
    // loadFolder:(payload:FOLDER)=>void;
    // putLoaders:(payload:FOLDER[])=>void;
    // setOnUpdateState :(payload:any)=>void;
    // setDeleteUser:(deleteArray:number[])=>void;

} 
export const AppStateContext = React.createContext<AppStateContextProps>({} as AppStateContextProps)

export const useRentState = () => {
    return useContext(AppStateContext)
}