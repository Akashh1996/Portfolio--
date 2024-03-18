import navItems from '../utils/nav';

const Nav = ({ onClick }) => {
    return (
        <div className='menu'>
        {navItems.map((item, idx) => (
            <span
                className='menu-item'
                key={idx}
                onClick={() => onClick(item.ref)}
                >
                {item.name}
            </span>
        ))}
    </div>
    )
};

export default Nav;