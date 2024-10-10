<?php

namespace Database\Seeders;

use App\Models\Link;
use App\Models\User;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LinksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all(); // Fetch all users

        foreach ($users as $user) {
            
            Link::create([
                'name' => 'facebook',
                'url' => 'https://facebook.com',
                'iconName' => 'bi-facebook',
                'order' => 1,
                'color' => 'blue',
                'user_id' => $user->id,
            ]);

            Link::create([
                'name' => 'instagram',
                'url' => 'https://instagram.com',
                'iconName' => 'bi-instagram',
                'order' => 2,
                'color' => 'red',
                'user_id' => $user->id, 
            ]);
        }

    }
}
