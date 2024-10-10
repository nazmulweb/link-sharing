import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import React from 'react'

const SortableItem = ({ link, removeLink, index }) => {

    const { attributes, listeners, setNodeRef, isDragging, transform, transition } = useSortable({
        id: link.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div>
            <div
                ref={setNodeRef}
                {...attributes}
                style={style}
                className='bg-gray-100 mb-5 py-3 px-5 rounded-lg'
            >
                <div className='flex justify-between items-center mb-2'>
                    <div {...listeners} style={{ cursor: 'grab' }}>
                        <i class="bi bi-list text-gray-500 mr-2"></i> Link #{index + 1}
                    </div>
                    <button onClick={removeLink} className='text-gray-500'>Remove</button>
                </div>
                <div className='pb-2'>
                    <div>
                        <label for="platform">Platform</label>
                        <input
                            id="platform"
                            onChange={(e) => link.url = e.target.value}
                            type="url"
                            placeholder="Link URL"
                            required
                            className='w-full rounded'
                        />
                    </div>
                    <div className='w-full mt-3'>
                        <label for="link">Link</label>
                        <input
                            id='link'
                            onChange={(e) => link.iconName = e.target.value}
                            type="text"
                            placeholder="Icon Name"
                            required
                            className='w-full rounded'
                        />
                    </div>
                </div>

            </div>
        </div>

  )
}

export default SortableItem