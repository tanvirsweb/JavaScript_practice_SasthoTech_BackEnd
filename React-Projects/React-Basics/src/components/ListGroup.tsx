import { useState } from "react";

function ListGroup() {
    let items = ['New York', 'San Francisco', 'Tokyo', 'London'];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1 className="mt-4">Static List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index); 
                            console.log(`index: ${index} item: ${item}`);
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

export default ListGroup;
