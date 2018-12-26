// import React from 'react';


// let users = JSON.parse(localStorage.getItem('email')) || [];



// export default class RegisterUser extends React.Component {
    // constructor(props) {
        // super(props);

        // this.state = {apiData: []};
    // }

    // componentDidMount() {
    // }

        export const callApi=(first_name, last_name, email, password, salutation, user_role, agree_terms_condition)=>{
            console.log(first_name, last_name, email, password, 'akjasdkjas');
            const url = 'http://192.168.31.50:8000/api/user'
            // fetch
            // const url = 'https://Stage-app1.xceltrip.com/api/promo'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    //  data
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                    salutation: salutation,
                    user_role: user_role,
                    agree_terms_condition: agree_terms_condition,
                }
    
                )
            })
                .then((response) => {
                    // console.log('result', result.json())
                    return response.json();
                })
                .then(response => JSON.stringify(response))
                .catch(error => error)
                // .then((jsonResult)=>{
    
                //    this.setState(
                //        {apiData:jsonResult.data.dataList}
                //    )
                // })
                // .then(
                //     fetch()
                // )
    
        
    }


    // render(){ return(console.log('hhhh'))} ;

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
// }