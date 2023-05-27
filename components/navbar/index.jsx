import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between py-4'>
            <div>LOGO</div>
            <div className='flex flex-row gap-8'>
                <Link href={''}>Home</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Project</Link>
                <Link href={''}>Our Team</Link>
                <Link href={''}>Contact</Link>
            </div>

        </div>
    );
};

export default Navbar;
