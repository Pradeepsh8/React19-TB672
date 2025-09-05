import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



function Databinding() {

    //console.log('Databinding component');

    console.log(import.meta.env.VITE_EMAIL);

    const fullName = "Pradeep Shet";

    const [name, setName] = useState('Test'); //hook
    const [lastName, setLastName] = useState(); //hook

    const addressRef = useRef();

    const handleClick = (e, msg) => {
        e.target.innerText = "I am clicked now";
        alert('Clicked ' + msg);

        setTimeout(() => {
            e.target.innerText = "Click Me";
        }, 2000);

        addressRef.current.value = "India";
        addressRef.current.style.backgroundColor = 'yellow';

        setLastName('Shet');
    }

    const handleChange = (e) => {
        //update the state of property
        setName(e.target.value);
    }


    useEffect(() => {
        console.log('Triggered useEffect' + fullName);
    }, []);

    return (
        <>
            <h4>Data Binding</h4>
            <h5>Name={fullName}</h5>
            <h5>LastName={lastName}</h5>
            <button className="btn btn-primary" onClick={(e) => handleClick(e, 'Hi')}>Click Me</button>

            <div>
                Enter Name: <input type="text" value={name} onChange={(e) => handleChange(e)} />
                <b>{name}</b>
            </div>

            <div>
                Enter Address: <input type="text" ref={addressRef} />
            </div>

            <hr />

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to="personal">Personal</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink className="nav-link" to="education">Education</NavLink>
                </li>
            </ul>

            <Outlet />
        </>
    )

}

export default Databinding;
