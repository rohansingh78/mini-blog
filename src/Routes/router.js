import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import('../Components/Home'));
const Post = lazy(()=>import('../Components/Post'));
const NotFound = lazy(()=>import('../Components/404'))
function Routing() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loding..</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:slug" element={<Post />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
export default Routing;