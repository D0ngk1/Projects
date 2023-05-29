export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]{3,40}@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');