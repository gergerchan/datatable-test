import ReactDatatable from '@ashvin27/react-datatable';

const Tables = ({records,columns}) => {
    
    
    const config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        filename: "restaurents",
        button: {
            excel: true,
            print: true,
            csv: true
        }
    }

    return (
        <div className="mt-5">
            <ReactDatatable
                config={config}
                records={records}
                columns={columns}/>
        </div>
    )
}

export default Tables
