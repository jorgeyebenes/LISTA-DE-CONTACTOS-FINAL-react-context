import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
export const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [agenda, setAgenda] = useState("osifrankpeter_list");
    const { store, actions } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(name, email, address, phone);
    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter phone"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">
                        save
                    </button>
                    <Link className="mt-3 w-100 text-center" to="/">
                        or get back to contacts
                    </Link>
                </form>
            </div>
        </div>
    );
};