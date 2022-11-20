function getUser(){
    return new Promise<{ name: string, age: number }>( (res, rej) => {
        // setTimeout( () => {
        //     res({ name: 'Vardges', age: 21 });
        // }, 3000 );
        setTimeout( () => {
            rej();
        }, 4000 )
    } )
}

export default getUser;
