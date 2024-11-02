import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: FC = () => (
    <div>
        <p>This is our layout</p>

        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
        </ul>
        
        <Outlet /> 
    </div>
);