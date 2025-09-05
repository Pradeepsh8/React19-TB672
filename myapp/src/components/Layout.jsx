import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Databinding from "./Databinding";
//import Search from "./Search";
//import ProductView from "./ProductView";
import { lazy, Suspense, } from "react";
import Navbar from "./Navbar";
import { UserProvider } from "../context/UserProvider";
import SearchClass from "./SearchClass";
import Child1 from "./Child1";
import Child2 from "./Child2";




const Layout = () => {

    const Databinding = lazy(() => import('./Databinding'));
    const Search = lazy(() => import('./Search'));
    const ProductView = lazy(() => import('./ProductView'));
    const Home = lazy(() => import('./Home'));
    const UnControlledForm = lazy(() => import('./UnControlledForm'));
    const ControlledForm = lazy(() => import('./ControlledForm'));
    const Formikform = lazy(() => import('./FormikForm'));
    const Login = lazy(() => import('./Login'));
    const Products = lazy(() => import('./Products'));
    const SearchClass = lazy(() => import('./SearchClass'));
    const SearchRedux = lazy(() => import('./SearchRedux'));
    const UnitTest = lazy(() => import('./UnitTest'));

    return (<>
        <BrowserRouter>
            <UserProvider>
                <Navbar />
                <Suspense fallback={<div>Loading....</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/databinding" element={<Databinding />}>
                            <Route path="personal" element={<Child1 />} />
                            <Route path="education" element={<Child2 />} />
                        </Route>
                        <Route path="/search" element={<Search />} />
                        <Route path="/product-view/:id" element={<ProductView />} />
                        <Route path="/uncontrolled" element={<UnControlledForm />} />
                        <Route path="/controlled" element={<ControlledForm />} />
                        <Route path="/formik" element={<Formikform />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/formik/:pid" element={<Formikform />} />
                        <Route path="/search-class" element={<SearchClass />} />
                        <Route path="/search-redux" element={<SearchRedux />} />
                         <Route path="/unittest" element={<UnitTest />} />
                        <Route path="*" element={<Databinding />} />

                    </Routes>
                </Suspense>
            </UserProvider>
        </BrowserRouter>
    </>)
}

export default Layout; 