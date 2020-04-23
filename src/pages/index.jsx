import React from 'react';
import Logo from '../atoms/Logo';

const Page = () => (
    <div>
        <Logo />
    </div>
);

Page.namespacesRequired = ['common', 'header', 'home'];

export default Page;
