import Tables from "./Tables"
import ShowData from "./ShowData";
import records from "./records.json"
import { useRouteMatch } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Pages = () => {
    const { path } = useRouteMatch();
    const [data, setData] = useState("")
    const columns = [
        {
            key: "name",
            text: "Name",
            className: "name",
            sortable: true
        },
        {
            key: "address",
            text: "Address",
            sortable: true
        },
{
    key: "action",
    text: "Action",
    cell: (record, index) => {
        return (
            <>
                <BrowserRouter>
                    <Link to={`/view/${index}`}>
                        <button
                            className="btn btn-primary btn-sm"
                            style={{marginRight: '5px'}}
                            onClick={setData(record)}>
                                Show Data
                        </button>
                    </Link>
                </BrowserRouter>
            </>
        );
    }
}
    ];

    return (
        <>
        <Switch>
            <Route exact path={path}>
                <Tables records={records} columns={columns} />
            </Route>
            <Route exact path={`/view/:id`}>
                <ShowData data={data}/>
            </Route>
        </Switch>
        </>
    )
}

export default Pages
