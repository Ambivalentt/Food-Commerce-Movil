import { useState } from 'react'
import './NavbarCategory.css'
const NavbarCategory = ({ allCategories, scrollToCategory  }: { allCategories: string[],  scrollToCategory: (category: string) => void}) => {
    const [activeCategory, setActiveCategory] = useState(allCategories[0]); // Inicialmente, selecciona la primera categoría

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        scrollToCategory(category)
        
    };

    return (
        <nav className="w-full border-b-2">
            <ul className="flex overflow gap-x-4 static ">
                {allCategories.map((category) => (
                    <li
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`cursor-pointer py-2 focus:outline-none first-letter:capitalize font-semibold text-sm ${activeCategory === category
                                ? 'border-b-4 border-blue-700 text-blue-700'
                                : 'bg-white  hover:bg-gray-100'
                            }`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarCategory