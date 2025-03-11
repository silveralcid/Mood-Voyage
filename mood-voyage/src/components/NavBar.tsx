'use client'

import { JSX } from 'react'
import { ThemeSelector } from './ThemeSelector'

export default function NavBar(): JSX.Element {
    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <a className='btn btn-ghost text-x1'>
                    Mood Voyage
                </a>
            </div>
            <div className='flex-none'>
                <ThemeSelector />
            </div>
        </div>
    );
}