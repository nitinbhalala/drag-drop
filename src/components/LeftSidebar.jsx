import React from 'react';
import Accordion from './common/Accordion';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function LeftSideBar() {
    const Items = ["Option 1", "Option 2", "Option 3"];

    return (
        <div>
            <ul className="h-full">
                <Droppable droppableId='droppableLeftSidebar'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Accordion title={"List Items"}>
                                {/* Accordion content */}
                                <div className="flex flex-col gap-4 p-4">
                                    {Items?.map((item, index) => (
                                        <Draggable key={index} draggableId={index.toString()} index={index}>
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
                                </div>
                            </Accordion>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='droppableLeftSidebar'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Accordion title={"List Items"}>
                                {/* Accordion content */}
                                <div className="flex flex-col gap-4 p-4">
                                    {Items?.map((item, index) => (
                                        <Draggable key={`first${index}`} draggableId={`first${index}`} index={`first${index}`}>
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
                                </div>
                            </Accordion>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='droppableLeftSidebar'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <Accordion title={"List Items"}>
                                {/* Accordion content */}
                                <div className="flex flex-col gap-4 p-4">
                                    {Items?.map((item, index) => (
                                        <Draggable key={`second${index}`} draggableId={`second${index}`} index={`second${index}`}>
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
                                </div>
                            </Accordion>
                        </div>
                    )}
                </Droppable>
                {/* Other accordions */}
            </ul>
        </div>
    );
}

export default LeftSideBar;
