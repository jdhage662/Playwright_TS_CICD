import dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'dev';

dotenv.config({
    path:`./config/${env}.env`
})

export const ENV ={
    uiURL: process.env.UI_URL !,
    username: process.env.UNAME !,
    password: process.env.PWD!,
    apiURL: process.env.API_URL !
};

