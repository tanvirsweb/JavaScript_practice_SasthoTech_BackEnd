import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function GenericListGroup( {items, heading, onSelectItem}: Props ) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1 className="mt-4"> {heading} </h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index); 
                            onSelectItem(item);
                        }}
                    > 
                        {item}
                    </li>
                    )
                )}
            </ul>
        </>
    );
}



export default GenericListGroup;



