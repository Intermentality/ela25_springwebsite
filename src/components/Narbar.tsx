import Link from "next/link"

export function Navbar(){

    return <div className="navbar justify-between bg-primary text-neutral-content">
        <div>
            <Link href="/" className="btn btn-ghost btn-primary text-primary-content text-xl">Aftershock Website</Link>
        </div>
        <div>
            {/* <button className="btn btn-primary">Article Posts</button> */}

            {/* <div className="dropdown dropdown-end ml-2">
                <div tabIndex={0} role="button" className="btn btn-secondary rounded-field">Other Sites</div>
                <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                    <li className="text-base-content">
                        <Link href="">Student Site 1</Link>
                    </li>
                    <li className="text-base-content">
                        <Link href="">Student Site 2</Link>
                    </li>
                </ul>
            </div> */}
        </div>
    </div>
}