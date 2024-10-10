import InputError from '@/Components/InputError';
import dropdown from '@/Constants/dropdown';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import React from 'react'

const SortableItem = ({id, link, removeLink, index, handleChange, errors, processing }) => {

    const { attributes, listeners, setNodeRef, isDragging, transform, transition } = useSortable({
        id: link.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    // console.log(processing)

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
                        <i className="bi bi-list text-gray-500 mr-2"></i> Link #{index + 1}
                    </div>
                    <button type='button' onClick={removeLink} className='text-gray-500' disabled={processing}>Remove</button>
                </div>
                <div className='pb-2'>
                    <div>
                        <label htmlFor="platform">
                            Platform
                        </label>
                        <select 
                            className='w-full rounded'
                            value={link?.name}
                            onChange={(e) => 
                                handleChange(id, 'name', e.target.value)
                            }
                        >
                            {
                                dropdown.map((option, index) => <option key={option.name+index} className={option.name}><i className={`bi ${option.iconName}`}> {option.name}</i></option>)
                            }                            
                        </select>
                        <InputError
                            message={errors[`links.${index}.name`]}
                            className="mt-2"
                        />
                    </div>
                    <div className='w-full mt-3'>
                        <label htmlFor="link">Link</label>
                        <input
                            value={link?.url}
                            id='link'
                            onChange={(e) => handleChange(id, 'url', e.target.value)}
                            type="text"
                            placeholder="Icon Name"
                            className='w-full rounded'
                        />
                        <InputError
                            message={errors[`links.${index}.url`]}
                            className="mt-2"
                        />
                    </div>
                </div>

            </div>
        </div>

  )
}

export default SortableItem