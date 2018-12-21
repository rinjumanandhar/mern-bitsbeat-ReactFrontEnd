import React from 'react';


// let users = JSON.parse(localStorage.getItem('email')) || [];



export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {apiData: []};
    }

    componentDidMount() {

        const callApi=(data)=>{
            const url = 'https://Stage-app1.xceltrip.com/api/promo'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Conetnt-Type': 'application/json'
                },
                body:JSON.stringify({ data
                    // "first_name": data.first_name,
                    // "last_name": data.last_name,
                    // "email": data.email,
                    // "password": data.password,
                    // "salutation": data.salutation,
                    // "user_role": data.user_role,
                    // "agree_terms_condition": data.agree_terms_condition,
                }
    
                )
            })
                .then((result) => {
    
                    return result.json();
                }).then((jsonResult)=>{
    
                   this.setState(
                       {apiData:jsonResult.data.dataList}
                   )
            })
    
        }
    }


    render(){ return(console.log('hhhh'))} ;

// const { apiData } =this.state;
//         return (
//             <div id="layout-content" className="layout-content-wrapper">
//                 <button onClick={() => this.callApi()}>
//                     Click here to call API
//                 </button>
//                 {apiData.length>0 &&
//                     apiData.map((promo,i)=>(
//                         <p key={i}>
//                             { promo.promo_code}
//                         </p>
//                     ))
//                 }
//             </div>
//         );
//     }
}