import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const User = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Users</h1>
            {userData.loading ? (
                <h2>Loading</h2>
            ) : userData.error ? (
                <div>{userData.error}</div>
            ) : (
                <div>
                    {userData?.users?.map((user) => (
                        <div>{user.name}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default User;
