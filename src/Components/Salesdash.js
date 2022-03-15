import React,{useState} from 'react'
import Orders from './Orders';
import SalesExecutive from './SalesExecutive';
import SideNav from './SideNav';

const Salesdash = () => {
  const [selectedTab, setSelectedTab] = useState('Orders')
    
    return (
        <>
        <SideNav setSelectedTab={setSelectedTab}/>
        <div>
            {
                (() => {
                    {
                        switch(selectedTab){
                            case 'Orders':
                                return <Orders/>
                            case 'Sales Executives':
                                return <SalesExecutive/>
                            default:
                                <div>Page not Found</div>
                        }
                    }
                })()
            }
        </div>
        <button onClick={()=>localStorage.clear()}>Logout</button>
        </>
    )
}

export default Salesdash