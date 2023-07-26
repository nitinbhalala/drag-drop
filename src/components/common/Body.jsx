import React from 'react';
import Layout from './Layout';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function Body({ droppedItems, setDroppedItems }) {
    const handleDropEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        // Reorder the items in the droppedItems array based on drag and drop
        const updatedItems = Array.from(droppedItems);
        const [movedItem] = updatedItems.splice(source.index, 1);
        updatedItems.splice(destination.index, 0, movedItem);
        setDroppedItems(updatedItems);
    };

    return (
        <Layout>
            <Droppable droppableId='droppableResult'>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <h1 className="mb-4 text-3xl font-bold">Welcome to My Web Builder</h1>
                        <p>This is the body content of the page.</p>
                        {/* Render the dropped items here */}
                        {droppedItems.map((item, index) => (
                            <Draggable key={item} draggableId={item} index={index}>
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className="py-2 font-semibold text-center border-2 border-blue-500 rounded-md cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Layout>
    );
}

export default Body;
