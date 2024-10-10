<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $links = Link::where('user_id', auth()->id())->orderBy('order', 'desc')->get();
        return Inertia::render('Links/Links', [
            'links' => $links,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $rules = [];
        foreach ($request->get('links') as $key => $link) {
            $rules['links.' . $key . '.name'] = 'required|string|unique:links,name,' . ($link['id'] ?? 'NULL');
            $rules['links.' . $key . '.url'] = [
                'required',
                'regex:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/',
            ];
        }
    
        $messages = [
            'links.*.name.required' => 'Name is required.',
            'links.*.url.required' => 'URL is required.',
            'links.*.url.regex' => 'The URL format is invalid. Please enter a valid URL.',
            'links.*.name.unique' => 'The name has already been taken. Please choose a different name.'
        ];    

        $validatedData = $request->validate($rules, $messages);

        foreach ($request->links as $linkData) {
            $newItem = explode("_", $linkData['id']);
            // inset item if id with the new keyword
            if($newItem[0] == 'new'){
                Link::create([
                    'name' => $linkData['name'],
                    'url'=> $linkData['url'], 
                    'iconName'=> $linkData['iconName'], 
                    'color'=> $linkData['color'], 
                    'order'=> $linkData['order'],
                    'user_id' => auth()->id()
                ]);
            } else{
                // update item 
                Link::where('id', $linkData['id'])->where('user_id', auth()->id())->update([
                    'name' => $linkData['name'],
                    'url'=> $linkData['url'], 
                    'iconName'=> $linkData['iconName'], 
                    'color'=> $linkData['color'], 
                    'order'=> $linkData['order']
                ]);
            }
        }    

        return redirect()->route('links.index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $links = Link::where('user_id', auth()->id())->orderBy('order', 'desc')->get();
        return Inertia::render('Links/Details', [
            'links' => $links,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $link = Link::where('user_id', auth()->id())->findOrFail($id);
        $link->delete();
        return redirect()->route('links.index');
    }
}
