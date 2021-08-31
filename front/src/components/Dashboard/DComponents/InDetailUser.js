import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getThisUser} from '../../../store/userSlice';
import { Page, Card, DataTable } from '@shopify/polaris';

// const DetailCard = styled

const InDetailUser = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.user.userDetail);

    useEffect(() => {
        dispatch(getThisUser(id))
    }, [dispatch, id]);

    const rows = userDetail.map(user => {
        return (
            [user.id,
            user.firstname,
            user.lastname,
            user.email,

            ]
        )
    })

    return (
            <Page title="User in detail">
                <Card>
                    <DataTable
                        columnContentTypes={[
                            'numeric',
                            'text',
                            'text',
                            'text',
                        ]}
                        headings={[
                            'id',
                            'Fristname',
                            'Lastname',
                            'Email',
                        ]}
                        rows={rows}
                    />
                </Card>
            </Page>
    );
};

export default InDetailUser;