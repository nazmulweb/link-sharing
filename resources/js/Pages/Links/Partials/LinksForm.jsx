import React, { useState } from 'react'
import { DndContext, useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import PerfectScrollbar from 'react-perfect-scrollbar'
import SortableItem from './SortableItem';



const LinksForm = () => {

    const [links, setLinks] = useState([{ id: Date.now(), url: '', iconName: '', order: 1 }]);

    const addLink = () => {
        console.log('test')
      setLinks([...links, { id: Date.now(), url: '', iconName: '', order: links.length + 1 }]);
    };
  
    const removeLink = (index) => {
        console.log(index)
      setLinks(links.filter((_, i) => i !== index));
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
    
        if (active.id !== over.id) {
          const oldIndex = links.findIndex(link => link.id === active.id);
          const newIndex = links.findIndex(link => link.id === over.id);
    
          const updatedLinks = Array.from(links);
          const [movedLink] = updatedLinks.splice(oldIndex, 1);
          updatedLinks.splice(newIndex, 0, movedLink);
          setLinks(updatedLinks);
        }
    };


    const submitForm = async (e) => {
        e.preventDefault();
    }

    return (
        <div className=''>
            <div className='mt-5'>
                <button type="button" onClick={addLink} className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800 w-full"><i className="bi bi-plus"></i> Add new link</button>
            </div>
            <form onSubmit={submitForm}>
                    <div className='h-96 pb-8'>
                        <PerfectScrollbar
                            options={{
                                wheelPropagation: false,
                            }}
                        >
                                <DndContext onDragEnd={handleDragEnd}>
                                    <SortableContext items={links.map(link => link.id)} strategy={verticalListSortingStrategy}>
                                        {links.map((link, index) => (
                                        <SortableItem
                                            key={link.id}
                                            index={index}
                                            link={link}
                                            removeLink={() => removeLink(index)}
                                        />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                        </PerfectScrollbar>
                    </div>
                    <div className=' absolute bottom-0 w-full rounded-b-full bg-white py-5 border-t left-0 flex justify-end pr-8'>
                        <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default LinksForm