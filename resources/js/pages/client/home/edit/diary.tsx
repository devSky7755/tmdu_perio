import React, { useState } from "react";
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";
import BreshComponent from "../../../../components/breshcomponent";
import ToolButton from "../../../../components/toolcomponent";
import { Button, Card, CardContent, CardActions, Container, TextareaAutosize, Typography } from '@mui/material';

const Diary = () => {
    const [index,setIndex]=useState(1);
    const [tabindex,setTabIndex]=useState(1);
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"歯磨きや食事の内容を記録しましょう"}</p>
            <TypeHeader text="歯みがき"/>
            <div className="mt-16">
            <BreshComponent tabindex={tabindex} buttonClick={setTabIndex}/>
            </div>
            <div className="flex  flex-row items-cneter justify-between mt-8">
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(1)}} text="歯間ブラシ" className={index==1?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==1?"bresh.png":"bresh-none.png"}/>
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(2)}} text="歯間ブラシ" className={index==2?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==2?"material.png":"material-none.png"}/>
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(3)}} text="歯間ブラシ" className={index==3?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==3?"flox.png":"flox-none.png"}/>
            </div>
            <div>

            </div>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default Diary;
