import React from 'react';

const HomeMenus
 = ({ menus, filterName, maxChildren = 5 }) => {
    return (
        <div className="section__nav-list d-flex">
            <ul>
                {menus
                    .filter(menu => menu.name === filterName)
                    .map(menu => (
                        <React.Fragment key={menu.id}>
                            <li className="text-heading">
                                <a href="#">{menu.name}</a>
                            </li>
                            {menu.children &&
                                menu.children.length > 0 &&
                                menu.children.slice(0, maxChildren).map(child => (
                                    <li key={child.id} className="section__nav-item">
                                        <a href={`#category${child.id}`}>{child.name}</a>
                                    </li>
                                ))}
                        </React.Fragment>
                    ))}
            </ul>
        </div>
    );
};

export default HomeMenus
;
