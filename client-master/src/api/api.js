import React from 'react';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {apiData: []};
    }

    componentDidMount() {
    }

    callApi=()=>{
        // Github fetch library : https://github.com/github/fetch
        // Call the API page
        fetch('https://Stage-app1.xceltrip.com/api/promo')
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult)=>{
               this.setState(
                   {apiData:jsonResult.data.dataList}
               )
        })

    }

    render() {

const { apiData } =this.state;
        return (
            <div id="layout-content" className="layout-content-wrapper">
                <button onClick={() => this.callApi()}>
                    Click here to call API
                </button>
                {apiData.length>0 &&
                    apiData.map((promo,i)=>(
                        <p key={i}>
                            { promo.promo_code}
                        </p>
                    ))
                }
            </div>
        );
    }
}