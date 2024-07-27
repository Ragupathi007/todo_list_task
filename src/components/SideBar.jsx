import { Link } from 'react-router-dom';
import {
    HomeIcon,
    UserIcon
} from "@heroicons/react/24/outline";

const navigation = [
    { name: 'Users Form', to: '/', icon: HomeIcon },
    { name: 'Create Todo List', to: '/CreatetodoList', icon: UserIcon },
];

const SideBar = () => {
    return (
        <div className="h-full w-64 bg-gray-800 text-white p-4">
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul>
                {navigation.map((item) => (
                    <li key={item.name} className="mb-2">
                        <Link to={item.to} className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
