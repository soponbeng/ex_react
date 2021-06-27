import React from "react";

const Footer = (props) => {
    const{company , email} = props;
    return (
    <div className="container-fluid">
        <hr/>
        <div className="text-center title">
            <small>      
        <span className="text-danger">Powered BY {company}</span>|<span> Contact by Email :{email}</span>
        </small>  
            </div>
        </div>
        )
}
export default Footer ;