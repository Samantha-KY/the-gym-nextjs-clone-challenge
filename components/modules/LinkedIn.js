import React from "react";

const LinkedIn = ({ className }) => {
    return (
        <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.247 2.625A2.623 2.623 0 1 1 0 2.622a2.623 2.623 0 0 1 5.247.003Zm.078 4.564H.08v16.422h5.246V7.189Zm8.29 0h-5.22v16.422h5.167v-8.618c0-4.8 6.257-5.246 6.257 0v8.618H25V13.21c0-8.093-9.26-7.792-11.438-3.817l.053-2.204Z"
                fill="#3F4246"
                className={className}
            ></path>
        </svg>
    );
};

export default LinkedIn;