import WireComponent from "./wire-component";
import { TableData } from "../sample-data";

export default function Table1() {

    const config = { data: new TableData() };

    return <WireComponent component="wire.bsTable" config={config}>
            <table className="table table-hover table-striped"></table>
        </WireComponent>;

}

