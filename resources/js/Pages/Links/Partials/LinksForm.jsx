import React from 'react'
import { DndContext } from '@dnd-kit/core';
import {
    arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import PerfectScrollbar from 'react-perfect-scrollbar'
import SortableItem from './SortableItem';
import icon from '@/Constants/icon';
import { Inertia } from '@inertiajs/inertia'; // Correct import
import { useForm, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import dropdown from '@/Constants/dropdown';
import SecondaryButton from '@/Components/SecondaryButton';


const LinksForm = () => {
    const { links: allLinks } = usePage().props;
    const { data: links, setData: setLinks, post, errors, delete:destroy, processing, recentlySuccessful } =
    useForm({links: allLinks.length > 0 ? allLinks : [{ id: `new_${Date.now()}`, name: '', url: '', color: '', iconName: '', order: 1 }]});

    // add new link form 
    const addLink = () => {
      setLinks({links: [{ id: `new_${Date.now()}`, name: '', url: '', color: '', iconName: '', order: links.links.length + 1 }, ...links.links]});
    };
  
    // remove link form 
    const removeLink = async (index, id) => {
        const updatedLinks = links?.links.filter((_, i) => i !== index);
        setLinks({links: updatedLinks});
        if(id){
            await destroy(route('links.destroy', id), {
                onSuccess: () => {
                    toast.success("Link deleted successfully.")
                }
            });
        }
    };

    // drag and drop form 
    const handleDragEnd = (event) => {
        const { active, over } = event;
    
        if (active.id !== over.id) {
            const { active, over } = event;
    
            if (active.id !== over.id) {
              const oldIndex = links?.links?.findIndex(link => link.id === active.id);
              const newIndex = links?.links?.findIndex(link => link.id === over.id);
        
              const updatedLinks = Array.from(links?.links);
              const [movedLink] = updatedLinks.splice(oldIndex, 1);
              updatedLinks.splice(newIndex, 0, movedLink);
              setLinks({links:updatedLinks});
            }
        }
    };

    const handleChange = (id, field, value) => {
        setLinks((prevLinks) =>{
         const updatedLinks =   prevLinks?.links?.map((link) => {
                if (link.id === id) {
                    if(field === "name"){
                        const selectedColor = dropdown.find(item => item.name === value);
                        return {...link,  name: value, color: selectedColor?.color , iconName: icon[value] || ""}
                    } 
                    return { ...link, [field]: value };
                }
                return link;
            })
            return {
                links: updatedLinks
            }
        }
 
        );
    };

    // submit form 
    const submitForm = async (e) => {
        e.preventDefault();
        post(route('links.store'), {
            onSuccess: () => {
                toast.success("Link saved successfully.")
                Inertia.visit(window.location.href, { preserveState: true });
            }
        });
    }


    return (
        <div className=''>
            <div className='mt-5'>
                <button type="button" onClick={addLink} className="text-purple-700 flex items-center justify-center hover:text-white border border-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-6 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800 w-full"><i className="bi bi-plus text-2xl"></i> Add new link</button>
            </div>
            <form onSubmit={submitForm}>
                <div className='h-96 pb-14'>
                    <PerfectScrollbar
                        options={{
                            // wheelPropagation: false,
                        }}
                    >
                        <DndContext onDragEnd={handleDragEnd}>
                            <SortableContext items={links?.links?.map(link => link.id)} strategy={verticalListSortingStrategy}>
                                {links?.links?.map((link, index) => (
                                    <SortableItem
                                        key={link.id}
                                        id={link.id}
                                        index={index}
                                        link={link}
                                        removeLink={() => removeLink(index, link.id)}
                                        handleChange={handleChange}
                                        errors={errors}
                                        processing={processing}
                                    />
                                ))}
                            </SortableContext>
                        </DndContext>
                    </PerfectScrollbar>
                </div>
                <div className=' absolute bottom-0 w-full rounded-b-full bg-white py-5 border-t left-0 flex justify-end pr-8'>
                    <SecondaryButton type='submit' solid disabled={processing}>{processing ? 'Saving...' : 'Save'}</SecondaryButton>
                </div>
            </form>
        </div>
    )
}

export default LinksForm