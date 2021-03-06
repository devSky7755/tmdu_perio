import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { ja } from "date-fns/locale";

const Calender = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"歯みがき記録"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"自分の記録をみてみましょう"}</p>
            <LocalizationProvider   locale={ja}  dateAdapter={AdapterDateFns} dateFormats={{ monthAndYear: 'YYYY MM' }}>
                <StaticDatePicker
                    className="text-mainColor"
                    displayStaticWrapperAs="desktop"
                    value={value}
                    views={["year","day"]}
                    onChange={(newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                    renderInput={(params) => <TextField  {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calender;
