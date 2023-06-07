import Searching from './Searching'
import Album from './Album';
import { useSelector } from "react-redux"
import Error from './Error'
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const data = useSelector((state) => state.products.product);
    const status = useSelector((state) => state.products.status);
    const search = useSelector((state) => state.products.search);
    const {isAuthenticated, isLoading } = useAuth0();
    console.log(status)
    console.log(data)
    console.log(search)

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (<div className='bg-slate-600 h-full'>
            <Searching />
            <div className='flex flex-wrap justify-center '>
                {status === "failed" ? <Error /> : status === "loading" ? <p>Loading</p> : data.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                }).map((item) => { return <Album key={item.id} {...item} /> })}
                { }
            </div>
        </div>
        )
    )
}

export default Home
