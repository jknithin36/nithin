import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/getintouch', label: 'Get In Touch' },
]

function PageNav() {
    return (
        <nav className="mt-8">
            <ul className="flex justify-center space-x-4">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-2 border-gray-500 font-bold text-gray-500'
                                    : 'text-black hover:text-gray-500'
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PageNav
