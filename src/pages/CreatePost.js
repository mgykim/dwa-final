import { React, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';

function CreatePostPage({ isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn && !isLoading) return navigate('/login'); //if NOT logged in, nav to login
    }, [isLoading, isLoggedIn, navigate]) //dependencies

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation} />
            <div className="PageWrapper">
                <h1>Create Post Page</h1>
            </div>
        </>
    );
}

export default CreatePostPage;