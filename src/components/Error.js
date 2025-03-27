import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const  err = useRouteError();
     console.log(err);
    return (
        <div>
            <h2>Opps an Error ocurred!</h2>
            <p>{err?.statusText || err?.message || 'Unknown error occurred'}</p>
        </div>
    );
};

export default Error;