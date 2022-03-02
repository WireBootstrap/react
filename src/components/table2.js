import MyTable from "./my-table";
import { TableData } from "../sample-data";

export default function Table2() {

    const config = { data: new TableData() };

    return <MyTable config={config}></MyTable>

}
