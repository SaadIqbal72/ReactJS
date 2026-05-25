import { NavLink, Outlet } from 'react-router-dom'

const UserProfile = () => {
    const profileTabs = [
        ['On Sale', '/profile/on-sale'],
        ['Collectibles', '/profile/collectibles'],
        ['Likes', '/profile/likes'],
        ['Following', '/profile/following'],
        ['Followers', '/profile/follower'],
    ]

    return (
        <>
            <nav className="flex sm:justify-center space-x-4">
                {profileTabs.map(([title, url]) => (
                    <NavLink
                        key={url}
                        to={url}
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-2 font-medium ${
                                isActive
                                    ? 'bg-[#E897B4] text-[#744C5A]'
                                    : 'bg-transparent text-[#E7F1D7]'
                            }`
                        }
                    >
                        {title}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-6">
                <Outlet />
            </div>
        </>
    )
}

export default UserProfile