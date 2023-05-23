import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import './Add.css'
import LibraryImg from "./lib.jpg";

export default function AddBook() {
  const navigate = useNavigate();
  const Username = sessionStorage.getItem('Username');





    const [Name, setName] = useState('');
    const [Type, setType] = useState('');
    const [Description, setDescription] = useState('');

    const handleChange = () => {
           
            const url = 'http://localhost/DBS_Project/PHP/addbook.php'
            let fData = new FormData();
            fData.append('Name', Name);
            fData.append('Type', Type);
            fData.append('Description', Description);
            fData.append('Added_by', Username);


            axios.post(url, fData)
                .then(response => {
                    alert(response.data)
                    if(response.data == 'UserError'){
                        window.location.href = '/Login';
                        
                    }
                    else{
                        navigate('/SuccessBook')
                    }
                })
                .catch(error => alert(error));
    }

    return (
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#d5ad18' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:'855px' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{maxHeight:'900px'}}>
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#5f4319' }}></i>
                                            <span className="h1 fw-bold mb-0"><b>Add Book Details</b></span>
                                        </div>
                                        <div className="final">
                                            <div className="addContainer">
                                                <div className="addcard">
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Name} onChange={(e) => setName(e.target.value)} />
                                                        <span className="user">Book Name</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Type} onChange={(e) => setType(e.target.value)} />
                                                        <span className="user">Book Type</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Description} onChange={(e) => setDescription(e.target.value)} />
                                                        <span className="user">Description</span>
                                                    </div>
                                                    
                                                    <Link className="enter" onClick={handleChange}>Submit</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
