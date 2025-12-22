import {BrowserRouter,Link,Route,Routes} from "react-router-dom";

export default function Routingg()
{
    return(
        <>
            <BrowserRouter>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>

            <Routes>
                <Route path="/" element={<h1>Home page connected</h1>}></Route>
                <Route path="/about" element={<h1>About page connected</h1>}></Route>
                <Route path="/contact" element={<h1>Contact page connected</h1>}></Route>
                <Route path="/help" element={<h1>Help page connected</h1>}></Route>
            </Routes>
            
            </BrowserRouter>
            
        </>
    )
}