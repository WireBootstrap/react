import WireComponent from "./wire-component";
import { FilterData } from "../sample-data";

export default function Filter1() {

    const config = { 
        data: new FilterData(),
        datamap: {value: "Product", label: "Product"},
        all: {value: "All Products", label: "All Products", selected: true}
    };

    return <WireComponent component="wire.bsSelect" config={config}>
            <select className="form-control"></select>           
        </WireComponent>;

}

