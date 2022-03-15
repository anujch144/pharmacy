import React, {useState} from "react";
import SideNav from './SideNav'
import CreateOrder from "./CreateOrder";
import Inventory from "./Inventory";
import Orders from "./Orders";
import SalesExecutive from "./SalesExecutive";

const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState('Inventory')
    
    return (
        <>
        <SideNav setSelectedTab={setSelectedTab}/>
        <div>
            {
                (() => {
                    {
                        switch(selectedTab){
                            case 'Create Order':
                                return <CreateOrder/>
                            case 'Inventory':
                                return <Inventory/>
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
export default Dashboard;