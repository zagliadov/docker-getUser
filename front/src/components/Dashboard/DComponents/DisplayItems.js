import React from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../store/userSlice';
import { DeleteMajor, EditMajor } from '@shopify/polaris-icons';
import styled from 'styled-components';

const MyDeleteMajor = styled(DeleteMajor)`
    width: 50px;
    height: 20px;
    cursor: pointer;
`;
const MyEditMajor = styled(EditMajor)`
    width: 50px;
    height: 20px;
    cursor: pointer;
`;

const DisplayItems = ({ users }) => {

    const dispatch = useDispatch();
    const rows = users.map(user => {
        return (
            [user.id,
            user.firstname,
            user.lastname,
            user.email,
            <MyDeleteMajor onClick={() => {
                dispatch(removeUser(user.id));
            }} />,
            <Link to={`/dashboard/user/${user.id}`}>
                <MyEditMajor />
            </Link>,

            ]
        )
    })

    return (
            <Page title="All Users">
                <Card>
                    <DataTable
                        columnContentTypes={[
                            'numeric',
                            'text',
                            'text',
                            'text',
                            'text',
                            'text',
                        ]}
                        headings={[
                            'id',
                            'Fristname',
                            'Lastname',
                            'Email',
                            'Remove',
                            'In detail',
                        ]}
                        rows={rows}
                    />
                </Card>
            </Page>
    );
};

export default DisplayItems;