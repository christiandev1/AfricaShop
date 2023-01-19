import React from 'react';
// import { FormulaireAPI } from '../@dependencies/GlobalStateDependencies';
// import { FOLDER, FolderInfo } from '../@interfaces/Folder';
// import { Building } from '../@interfaces/immeuble';
// import { TLocation } from '../@interfaces/logement';
// import { Mandatary } from '../@interfaces/mandatary';
// import { TonUpdateState } from '../@interfaces/onUpdate';
// import { DocumentReponse, FileResponse, postReponse, preventReponse } from '../@interfaces/request';
// import { TOASTPR } from '../@interfaces/toast';
// import { VisitorInfo } from '../@interfaces/vistor';
import { AppStateContext } from '../state/context';
// import { deleteFolderCreate, deleteFolderNotCreate } from './methods/folderMethods';
// import { manageUpdateofGlobalState } from './methods/manageUpdateofGlobalState';



export type TglobalState ={
    // visitorInfo : VisitorInfo;
    // folderInfo ?: FolderInfo;
    // representative ?: Mandatary
    // building ?: Building;
    // location ?: TLocation;
    landlords ?: {}
    isExist : boolean,
    signedFile ?: File;
    formData ?: FormData;
    toastInfo ?: any;
    user_id ?: string;
    acces_token ?: string;
    is_connected: boolean;
    comment?: string;
    onUpdate?: boolean;
    errorOnUpdate ?: boolean;
    file_links ?: {};
   
    
}

interface ProviderProps {
    children: React.ReactNode;
}

const AppGlobalStateProvider: React.FC<ProviderProps> = ({children}) => {
    const [globalState, SetGlobalState] = React.useState<TglobalState>({
        is_connected: false,
        isExist: false
    })
    
    const loadOfLocalStorage = async() => {
        localStorage.getItem("globalState")
        const result = JSON.parse(localStorage.getItem("globalState") || '{}')
        SetGlobalState({
            ...globalState, 
            ...result,
            visitorInfo: {
                ...result.visitorInfo,
                isLoad: true
            }
        })
    }
    // const saveInLocalStorage = async (ell) => {
    //     delete ell["formData"]
    //     return await localStorage.setItem("globalState", JSON.stringify(ell))
    // }
    
    // const saveListeDesBailleurs = (listOfLandlords) =>{

    //     const temp = {...globalState, landlords: listOfLandlords}
    //     SetGlobalState(temp)
    //     saveInLocalStorage(temp)
    // }
    // const addRepresentative = (representative)=> {
    //     const temp = {...globalState, representative}
    //     SetGlobalState(temp)
    //     saveInLocalStorage(temp)
    // }
    // const saveImmeubleInfo= (building) =>{

    //     const temp = {...globalState, building: building}
    //     SetGlobalState(temp)
    //     saveInLocalStorage(temp)
    // }
    

    const saveSignedFile= (formData: FormData) =>{
        let temp =  {} as TglobalState
        if(globalState.formData===undefined){
            temp = {...globalState, formData: formData}
        }else{
            const cerfa =  Object.fromEntries(formData).cerfa
            const formData2 = globalState.formData
            formData2.append('cerfa', cerfa)
            temp = {...globalState, formData: formData2}
        }
        SetGlobalState(temp)
        //saveInLocalStorage(temp)
    }
    // const saveFile= (formData) =>{

    //     const temp = {...globalState, formData: formData}
    //     SetGlobalState(temp)
    //     //saveInLocalStorage(temp)
    // }
    

    

    

    
    
    
    return (
        <AppStateContext.Provider value={{globalState}}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppGlobalStateProvider;


