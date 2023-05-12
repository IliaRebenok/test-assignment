import { Outlet } from "react-router-dom";

export default function Root(children) {

    return (
        <>
            <div>
                <h1>Test assignment</h1>

            </div>
            <div className="contentBox">
                <Outlet />
            </div>

        </>
    );
}
