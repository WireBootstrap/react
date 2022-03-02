import WireComponent from "./wire-component";

export default function MyTable(props) {   

    return <WireComponent component="wire.bsTable" config={props.config}>    
                <table className="table table-hover table-striped"></table>
            </WireComponent>;

}