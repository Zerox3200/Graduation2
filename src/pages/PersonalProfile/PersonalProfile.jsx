import React, { Suspense } from 'react';
import { Nav } from '../../components/Nav/Nav'
import './PersonalProfile.scss';
import Loading from '../../components/Loading/Loading';

const Profile = React.lazy(() => import('../../components/ProfileDetails/Profile'));

export default function PersonalProfile() {
    return (
        <>
            <Nav />
            <Suspense fallback={<Loading />}>
                <Profile Moving={true} Edit={true}>
                </Profile>
            </Suspense>
        </>
    );
}
