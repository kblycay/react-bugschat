import { createBrowserRouter } from "react-router-dom";

import { Main } from "@/layouts";
import { Home, Chat } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    },
    {
        path: "/:chatId",
        element: <Chat />,
    }
]);

export default router;