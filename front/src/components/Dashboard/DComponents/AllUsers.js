import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllUsers } from '../../../store/userSlice';
import DisplayItems from './DisplayItems';

const AllUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    

    return (
        <div>
            <DisplayItems users={users} />
        </div>
    );
};

export default AllUsers;