<?php

namespace App\Http\Controllers;

use App\Http\Requests\LinkRequest;
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
        $links = Link::orderBy('order', 'asc')->get();
        // dd($links);
        return Inertia::render('Links/Links', [
            'links' => $links,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LinkRequest $request)
    {

        foreach ($request->all()['links'] as $linkData) {
            $newItem = explode("_", $linkData['id']);
            // inset item if id with the new keyword
            if($newItem[0] == 'new'){
                Link::create([
                    'name' => $linkData['name'],
                    'url'=> $linkData['url'], 
                    'iconName'=> $linkData['iconName'], 
                    'order'=> $linkData['order']
                ]);
            } else{
                // update item 
                Link::where('id', $linkData['id'])->update([
                    'name' => $linkData['name'],
                    'url'=> $linkData['url'], 
                    'iconName'=> $linkData['iconName'], 
                    'order'=> $linkData['order']
                ]);
            }
        }    

        return redirect()->route('links.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Link $link)
    {
        return Inertia::render('Links/Details', [
            'link' => $link,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LinkRequest $request, Link $link)
    {

        // $link->update($validated);
        $link->update($request->only(['name', 'url']));

        return redirect()->route('links.index')->with('success', 'Link updated successfully.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Link $link)
    {
        $link->delete();
        return redirect()->route('links.index')->with('success', 'Link deleted successfully.');
    }
}
