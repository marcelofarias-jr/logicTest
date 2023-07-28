import {Link} from '@mui/material';
import React from 'react';
export default function Header() {
    return (
        <header className='header'>
            <Link href='/'>Home</Link>
            <Link href='/test01'>1</Link>
            <Link href='/test02'>2</Link>
            <Link href='/test03'>3</Link>
            <Link href='/test04'>4</Link>
        </header>
    );
}
