<?php

namespace Database\Seeders;

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
        DB::table('links')->insert([
            ['name' => 'facebook', 'url' => 'https://facebook.com', 'color'=>'blue', 'iconName' => 'bi-facebook', 'order' => 1],
            ['name' => 'instagram', 'url' => 'https://instagram.com', 'color'=>'red', 'iconName' => 'bi-instagram', 'order' => 2],
        ]);

    }
}
