import React, { useContext } from "react";
import { AppContext } from './App';
import { AppContextInterface } from './constant';
import { calculateInterest } from './utils';
import { dashboardStyles } from './constant/style';

export const Dashboard = () => {
    const { state } = useContext<AppContextInterface | null>(AppContext);
    const { selectedList } = state;

    console.log(">>selectedList", selectedList);

    //flatten tags array to find user interest
    let allTags = selectedList.reduce(
        function (accumulator: [], currentValue: { tags: any; }) {
            return accumulator.concat(currentValue.tags)
        }, []);
    const renderHTML = <div>
        {
            selectedList && selectedList.length && selectedList[0].tags.map((item: React.ReactNode, index: number) => <div key={index}>{item}</div>)
        }
    </div>
    return <div style={{}}>
        <h3>Dashboard</h3>
        {
            selectedList && selectedList.length ? <div style={dashboardStyles}>
                <h4>User Interest -  {selectedList && selectedList.length === 1 ? renderHTML : calculateInterest(allTags)}</h4>
                <h5>List of Athletes you choose:</h5>
                {
                    selectedList.map((item: { athleteName: React.ReactNode; }, index: number | null | undefined) => <div key={index}>
                        <h5>{item.athleteName}</h5>
                    </div>)
                }
            </div> : null
        }

    </div>
}