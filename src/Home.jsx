import React, { useState,useEffect} from 'react';
import axios from 'axios';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import Appointment from "./Appointment";
// import Update from "./Update";

const Home = () => {
    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // usestate Hook for pagination


    // pagination 
   
    const recordPerPage = 5;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length/recordPerPage);
    const numbers = [...Array(nPage+1).keys()].slice(1);

    const prePage = () =>{
        if(currentPage!== 1){
            setCurrentPage(currentPage-1)
        }
    }

    const changeCPage = (id) =>{
        setCurrentPage(id)
    }

    const nextPage = () =>{
        if(currentPage!== nPage){
           setCurrentPage(currentPage+1);
        }
    }


    useEffect(() => {
        axios.get('http://localhost:7000/appointment')
            .then((res) => { setData(res.data) })
            .catch((err) => { console.log(err) })
    }, [])


    // delete record
    const handleDelete = (Id) =>{
        axios.delete('http://localhost:7000/appointment/'+Id)
        .then((res) =>{
          window.location.reload();
          alert('Reacord deleted successfully');
        })
        .catch((err) => {   
            console.log(err)
         })
    }  
    
    return (
    <>
{/* <Update/> */}

{/* Registration form using  Modal */}
                <div>
                <Modal
                size="md"
                isOpen={modal}
                toggle={()=>{setModal(!modal)}}
                >
                <ModalHeader
                
                toggle={()=>{setModal(!modal)}}
                >
                </ModalHeader>
                <ModalBody>
                  <Appointment/>
                </ModalBody>
                
                </Modal>
                <button className="btn btn-success m-3" onClick={()=>setModal(true)}>Registration</button>
               </div>   

               {/* modal close */}
               <div className='container'>
                <div className='row'>
                <div className='col col-lg-10'>
                        <div>
                            <table className='table border-1 text-center table-striped  table-bordered mt-4 m-auto' id='table-data'>
                                <thead className='table-dark' style={{fontSize:"12px"}}>
                                     <tr>
                                     <th>Id</th>
                         <th>Firstname</th>
                         <th>Lastname</th>
                         <th>Email</th>
                         <th>Gender</th>
                         <th>Phone</th>
                         <th>Dob</th>
                         <th>Street Address 1</th>
                         <th>Street Address 2</th>
                         <th>City</th>
                         <th>Postal</th>
                         <th>Country</th>
                         <th>Appointment</th>
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody style={{fontSize:"13px"}}>
                                    {records.map((item, index) => {
                                        return (
                                            <tr key={index}>
                             <td>{item.Id}</td>
                             <td>{item.firstname}</td>
                             <td>{item.lastname}</td>
                             <td>{item.email}</td>
                             <td>{item.gender}</td>
                             <td>{item.phone}</td>
                             <td>{item.dob}</td>
                             <td>{item.streetaddress1}</td>
                             <td>{item.streetaddress2}</td>
                             <td>{item.city}</td>
                             <td>{item.postal}</td>
                             <td>{item.country}</td>
                             <td>{item.appointment}</td>           
                            <td>
                                <button className='btn btn-success btn-sm'>
                                 <i className="fa-solid fa-user-pen fa-sm"></i>
                                 </button>
                            </td>
                                            
     <td>
{/* Updating form using  Modal */}

 <div>
 {/*
                <Modal
                size="lg"
                isOpen={updateModal}
                toggle={()=>{setUpdateModal(!updateModal)}}
                >
                <ModalHeader
                toggle={()=>{setUpdateModal(!updateModal)}}
                >
                </ModalHeader>
                <ModalBody>
                  <Update/>
                </ModalBody>
                
                </Modal> */}
               

    <button className='btn btn-sm btn-danger' onClick={()=>{handleDelete(item.Id)}}>
         <i className="fa-solid fa-xmark fa-sm"></i></button>
         </div>   
    </td>
     </tr>
        )
          })}
        </tbody>
        </table>

        
     </div>
   </div>
  </div>
  </div>
  <nav>
  <ul className='pagination' style={{margin:"40px"}}>
          <li className='page-item'>
            <a href='#' className='page-link  bg-primary text-light' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n,index)=>{
            <li className={`page-item ${currentPage=== n ? 'active' : '' }`} 
                key={index} >
                <a href='#' className='page-link' onClick={()=>changeCPage}>{n}</a>
           </li>
            })
          }
          <li className='page-item'>
            <a href='#' className='page-link bg-primary text-light' onClick={nextPage}>Next</a>
          </li>
  </ul>
  </nav>
</>
    );

   
}
export default Home;