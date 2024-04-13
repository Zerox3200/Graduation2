import React from 'react';
import './Loading.scss';
import { Oval } from 'react-loader-spinner';

export default function Loading() {
    return <>
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#31315b"
            secondaryColor=''
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="Pre-Loader"
        />
    </>
}
