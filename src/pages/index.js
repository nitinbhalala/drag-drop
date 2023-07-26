import React, { useState } from 'react';
import Body from '@/components/common/Body';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Home() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // Check if the item was dropped outside a droppable area
    if (!destination) {
      return;
    }

    // Reorder the items in the droppedItems array based on drag and drop
    const updatedItems = Array.from(droppedItems);
    const [movedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, movedItem);
    setDroppedItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Body droppedItems={droppedItems} setDroppedItems={setDroppedItems} />
    </DragDropContext>
  );
}
